import { useState } from "react";
import "./CreateCourse.css";
import { uploadFile } from "../services/cloudinary";
import { uploadPdf } from "../services/uploadPdf";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // ➕ MÓDULO
  function addModule() {
    setModules((prev) => [...prev, { title: "", lessons: [] }]);
  }

  // ❌ REMOVER MÓDULO
  function removeModule(index: number) {
    setModules((prev) => prev.filter((_, i) => i !== index));
  }

  // ✏️ EDITAR MÓDULO
  function updateModuleTitle(index: number, value: string) {
    const newModules = [...modules];
    newModules[index].title = value;
    setModules(newModules);
  }

  // ➕ AULA
  function addLesson(moduleIndex: number) {
    const newModules = [...modules];

    newModules[moduleIndex].lessons.push({
      id: Date.now(), // 🔥 IMPORTANTE pro player
      title: "",
      type: "video",
      content: "",
      cover: ""
    });

    setModules(newModules);
  }

  // ❌ REMOVER AULA
  function removeLesson(moduleIndex: number, lessonIndex: number) {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.splice(lessonIndex, 1);
    setModules(newModules);
  }

  // ✏️ ATUALIZAR AULA
  function updateLesson(
    moduleIndex: number,
    lessonIndex: number,
    field: string,
    value: any
  ) {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setModules(newModules);
  }

  // 💾 SALVAR CURSO
  async function handleSave() {
    if (!courseName || !price || modules.length === 0) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const userId = localStorage.getItem("userId");
      if (!userId) {
  alert("Usuário não logado");
  return;
}
      
      const course = {
  title: courseName,
  price: Number(price),
  modules,
  creatorId: userId // 🔥 ESSENCIAL
};

console.log("ENVIANDO:", modules); // 🔥 AQUI

      const response = await fetch(
        "https://avivai-backend-production.up.railway.app/courses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(course)
        }
      );

      const data = await response.json();
      console.log("CURSO CRIADO:", data);

      alert("Curso criado com sucesso!");

      // 🔥 REDIRECIONAMENTO CORRETO
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Erro ao salvar curso");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-course">

      <h1>Criar Curso</h1>

      {/* NOME */}
      <input
        placeholder="Nome do curso"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      {/* PREÇO */}
      <input
        placeholder="Preço (ex: 97.00)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {/* MÓDULOS */}
      {modules.map((module, mIndex) => (
        <div key={mIndex} className="module">

          <h2>Módulo {mIndex + 1}</h2>

          <input
            placeholder="Nome do módulo"
            value={module.title}
            onChange={(e) =>
              updateModuleTitle(mIndex, e.target.value)
            }
          />

          <button onClick={() => removeModule(mIndex)}>
            ❌ Excluir módulo
          </button>

          {/* AULAS */}
          {module.lessons.map((lesson: any, lIndex: number) => (
            <div key={lIndex} className="lesson">

              <input
                placeholder="Nome da aula"
                value={lesson.title}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "title", e.target.value)
                }
              />

              <select
                value={lesson.type}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "type", e.target.value)
                }
              >
                <option value="video">🎥 Vídeo</option>
                <option value="pdf">📄 PDF</option>
                <option value="image">🖼️ Imagem</option>
                <option value="text">📝 Texto</option>
              </select>

              {/* TEXTO */}
              {lesson.type === "text" && (
                <textarea
                  placeholder="Conteúdo da aula"
                  value={lesson.content}
                  onChange={(e) =>
                    updateLesson(mIndex, lIndex, "content", e.target.value)
                  }
                />
              )}

              {/* UPLOAD */}
              {lesson.type !== "text" && (
                <input
                  type="file"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    alert("Enviando arquivo...");

                    let url: string | null = null;

                    if (lesson.type === "pdf") {
                      url = await uploadPdf(file);
                    } else {
                      url = await uploadFile(file);
                    }

                    if (!url) {
                      alert("Erro no upload");
                      return;
                    }

                    updateLesson(mIndex, lIndex, "content", url);
                  }}
                />
              )}

              {/* CAPA PDF */}
              {lesson.type === "pdf" && (
                <div>

                  <p style={{ fontSize: "12px" }}>
                    Capa do PDF (opcional)
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const url = await uploadFile(file);

                      if (!url) {
                        alert("Erro no upload da capa");
                        return;
                      }

                      updateLesson(mIndex, lIndex, "cover", url);
                    }}
                  />

                  {lesson.cover && (
                    <img
                      src={lesson.cover}
                      style={{
                        width: "120px",
                        marginTop: "10px",
                        borderRadius: "8px"
                      }}
                    />
                  )}

                </div>
              )}

              <button onClick={() => removeLesson(mIndex, lIndex)}>
                ❌ Excluir aula
              </button>

            </div>
          ))}

          <button onClick={() => addLesson(mIndex)}>
            + Adicionar aula
          </button>

        </div>
      ))}

      <button onClick={addModule}>
        + Adicionar módulo
      </button>

      <button className="save-btn" onClick={handleSave} disabled={loading}>
        {loading ? "Salvando..." : "💾 Salvar curso"}
      </button>

    </div>
  );
}