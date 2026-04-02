import { useState } from "react";
import "./CreateCourse.css";
import { uploadFile } from "../services/cloudinary";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");
  const [modules, setModules] = useState<any[]>([]);

  // ➕ ADICIONAR MÓDULO
  function addModule() {
    setModules((prev) => [
      ...prev,
      { title: "", lessons: [] }
    ]);
  }

  // ✏️ ATUALIZAR NOME DO MÓDULO
  function updateModuleTitle(index: number, value: string) {
    setModules((prev) => {
      const newModules = [...prev];
      newModules[index] = {
        ...newModules[index],
        title: value
      };
      return newModules;
    });
  }

  // ➕ ADICIONAR AULA
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

  // ✏️ ATUALIZAR AULA (CORRIGIDO 🔥)
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

  // 💾 SALVAR (COM VALIDAÇÃO 🔥)
  function handleSave() {

    if (!courseName) {
      alert("Digite o nome do curso");
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
      modules
    };

    console.log("SALVANDO CURSO:", course);

    localStorage.setItem("curso", JSON.stringify(course));

    alert("Curso criado com sucesso!");

    navigate("/dashboard");
  }

  return (
    <div className="create-course">

      <h1>Criar Curso</h1>

      {/* NOME DO CURSO */}
      <input
        placeholder="Nome do curso"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />

      {/* MÓDULOS */}
      {modules.map((module, mIndex) => (
        <div key={mIndex} className="module">

          {/* NOME DO MÓDULO */}
          <input
            placeholder="Nome do módulo"
            value={module.title}
            onChange={(e) =>
              updateModuleTitle(mIndex, e.target.value)
            }
          />

          {/* AULAS */}
          {module.lessons.map((lesson: any, lIndex: number) => (
            <div key={lIndex} className="lesson">

              {/* NOME DA AULA */}
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

              {/* CONTEÚDO */}
              {lesson.type === "text" ? (

                <input
                  placeholder="Digite o conteúdo da aula"
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

                    const url = await uploadFile(file);

                    console.log("URL GERADA:", url); // 🔥 DEBUG

                    if (!url) {
                      alert("Erro no upload");
                      return;
                    }

                    alert("Upload concluído!");

                    updateLesson(mIndex, lIndex, "content", url);
                  }}
                />

              )}

            </div>
          ))}

          {/* BOTÃO AULA */}
          <button onClick={() => addLesson(mIndex)}>
            + Adicionar aula
          </button>

        </div>
      ))}

      {/* BOTÃO MÓDULO */}
      <button onClick={addModule}>
        + Adicionar módulo
      </button>

      {/* SALVAR */}
      <button className="save-btn" onClick={handleSave}>
        Salvar curso
      </button>

    </div>
  );
}