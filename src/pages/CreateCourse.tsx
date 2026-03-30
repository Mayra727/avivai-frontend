import { useState } from "react";
import "./CreateCourse.css";

export default function CreateCourse() {

  const [courseName, setCourseName] = useState("");
  const [modules, setModules] = useState<any[]>([]);

  // ➕ ADICIONAR MÓDULO
  function addModule() {
    setModules([
      ...modules,
      { title: "", lessons: [] }
    ]);
  }

  // ✏️ ATUALIZAR NOME DO MÓDULO
  function updateModuleTitle(index: number, value: string) {
    const newModules = [...modules];
    newModules[index].title = value;
    setModules(newModules);
  }

  // ➕ ADICIONAR AULA (ATUALIZADO AQUI 🔥)
  function addLesson(moduleIndex: number) {
    const newModules = [...modules];

    newModules[moduleIndex].lessons.push({
      title: "",
      type: "video",   // 👈 padrão
      content: ""      // 👈 conteúdo (url, texto, etc)
    });

    setModules(newModules);
  }

  // ✏️ ATUALIZAR AULA
  function updateLesson(
    moduleIndex: number,
    lessonIndex: number,
    field: string,
    value: string
  ) {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setModules(newModules);
  }

  // 💾 SALVAR
  function handleSave() {
    const course = {
      title: courseName,
      modules
    };

    console.log("CURSO CRIADO:", course);
    alert("Curso criado com sucesso (simulação)");
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
              <input
                placeholder={
                  lesson.type === "text"
                    ? "Digite o conteúdo da aula"
                    : "URL ou arquivo (vamos melhorar depois)"
                }
                value={lesson.content}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "content", e.target.value)
                }
              />

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