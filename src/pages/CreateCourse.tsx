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

  // ➕ MÓDULO
  function addModule() {
    setModules((prev) => [
      ...prev,
      { title: "", lessons: [] }
    ]);
  }

  // ❌ REMOVER MÓDULO
  function removeModule(index: number) {
    setModules((prev) => prev.filter((_, i) => i !== index));
  }

  // ✏️ EDITAR MÓDULO
  function updateModuleTitle(index: number, value: string) {
    setModules((prev) => {
      const newModules = [...prev];
      newModules[index].title = value;
      return newModules;
    });
  }

  // ➕ AULA
  function addLesson(moduleIndex: number) {
    setModules((prev) => {
      const newModules = [...prev];

      newModules[moduleIndex].lessons.push({
        title: "",
        type: "video",
        content: ""
      });

      return newModules;
    });
  }

  // ❌ REMOVER AULA
  function removeLesson(moduleIndex: number, lessonIndex: number) {
    setModules((prev) => {
      const newModules = [...prev];

      newModules[moduleIndex].lessons = newModules[moduleIndex].lessons.filter(
        (_: any, i: number) => i !== lessonIndex
      );

      return newModules;
    });
  }

  // ✏️ EDITAR AULA
  function updateLesson(
    moduleIndex: number,
    lessonIndex: number,
    field: string,
    value: string
  ) {
    setModules((prev) => {
      const newModules = [...prev];

      newModules[moduleIndex].lessons[lessonIndex] = {
        ...newModules[moduleIndex].lessons[lessonIndex],
        [field]: value
      };

      return newModules;
    });
  }

  // 💾 SALVAR
  function handleSave() {

    if (!courseName) {
      alert("Digite o nome do curso");
      return;
    }

    if (!price) {
      alert("Digite o preço");
      return;
    }

    for (const mod of modules) {
      if (!mod.title) {
        alert("Todos os módulos precisam de nome");
        return;
      }

      for (const lesson of mod.lessons) {
        if (!lesson.title) {
          alert("Todas as aulas precisam de nome");
          return;
        }

        if (!lesson.content) {
          alert(`A aula "${lesson.title}" não tem conteúdo`);
          return;
        }
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
              {lesson.type === "text" ? (
                <input
                  placeholder="Digite o conteúdo"
                  value={lesson.content}
                  onChange={(e) =>
                    updateLesson(mIndex, lIndex, "content", e.target.value)
                  }
                />
              ) : (
                <input
                  type="file"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    alert("Enviando arquivo...");

                    let url: string | null = null;

                    if (lesson.type === "pdf") {
                      url = await uploadPdf(file); // ✅ SUPABASE
                    } else {
                      url = await uploadFile(file); // ✅ CLOUDINARY
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