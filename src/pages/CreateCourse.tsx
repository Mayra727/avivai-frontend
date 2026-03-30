import { useState } from "react";
import "./CreateCourse.css";

export default function CreateCourse() {

  const [courseName, setCourseName] = useState("");
  const [modules, setModules] = useState<any[]>([]);

  // adicionar módulo
  function addModule() {
    setModules([
      ...modules,
      { title: "", lessons: [] }
    ]);
  }

  // atualizar título do módulo
  function updateModuleTitle(index: number, value: string) {
    const newModules = [...modules];
    newModules[index].title = value;
    setModules(newModules);
  }

  // adicionar aula
  function addLesson(moduleIndex: number) {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.push({
      title: "",
      video: ""
    });
    setModules(newModules);
  }

  // atualizar aula
  function updateLesson(moduleIndex: number, lessonIndex: number, field: string, value: string) {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setModules(newModules);
  }

  function handleSave() {
    const course = {
      title: courseName,
      modules
    };

    console.log("CURSO CRIADO:", course);
    alert("Curso criado (simulação)");
  }

  return (
    <div className="create-course">

      <h1>Criar Curso</h1>

      <input
        placeholder="Nome do curso"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
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

              <input
                placeholder="URL do vídeo (vamos mudar depois)"
                value={lesson.video}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "video", e.target.value)
                }
              />

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