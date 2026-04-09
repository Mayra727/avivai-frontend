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

  // =========================
  // 📦 MÓDULOS
  // =========================

  function addModule() {
    setModules((prev) => [
      ...prev,
      { title: "", lessons: [] }
    ]);
  }

  function removeModule(index: number) {
    setModules((prev) => prev.filter((_, i) => i !== index));
  }

  function updateModuleTitle(index: number, value: string) {
    const newModules = [...modules];
    newModules[index].title = value;
    setModules(newModules);
  }

  // =========================
  // 📚 AULAS
  // =========================

  function addLesson(moduleIndex: number) {
    const newModules = [...modules];

    newModules[moduleIndex].lessons.push({
      title: "",
      type: "video",
      content: "",
      cover: ""
    });

    setModules(newModules);
  }

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

  function removeLesson(moduleIndex: number, lessonIndex: number) {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.splice(lessonIndex, 1);
    setModules(newModules);
  }

  // =========================
  // 💾 SALVAR CURSO
  // =========================

  function handleSave() {

    if (!courseName) return alert("Digite o nome do curso");
    if (!price) return alert("Digite o preço");

    for (const mod of modules) {
      if (!mod.title) return alert("Todos os módulos precisam de nome");

      for (const lesson of mod.lessons) {
        if (!lesson.title) return alert("Todas as aulas precisam de nome");
        if (!lesson.content)
          return alert(`A aula "${lesson.title}" não tem conteúdo`);
      }
    }

    const course = {
      title: courseName,
      price,
      modules
    };

    console.log("CURSO FINAL:", course);

    localStorage.setItem("curso", JSON.stringify(course));

    alert("Curso criado com sucesso!");
    navigate("/dashboard");
  }

  // =========================
  // 🎨 UI
  // =========================

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

              {/* TÍTULO */}
              <input
                placeholder="Nome da aula"
                value={lesson.title}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "title", e.target.value)
                }
              />

              {/* TIPO */}
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
                  placeholder="Digite o conteúdo"
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
                      url = await uploadPdf(file); // 🔥 SUPABASE
                    } else {
                      url = await uploadFile(file); // 🔥 CLOUDINARY
                    }

                    if (!url) {
                      alert("Erro no upload");
                      return;
                    }

                    alert("Upload concluído!");
                    updateLesson(mIndex, lIndex, "content", url);
                  }}
                />
              )}

              {/* CAPA DO PDF */}
              {lesson.type === "pdf" && (
                <div style={{ marginTop: "10px" }}>

                  <p style={{ fontSize: "12px", color: "#777" }}>
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

              {/* EXCLUIR AULA */}
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

      <button className="save-btn" onClick={handleSave}>
        Salvar curso
      </button>

    </div>
  );
}