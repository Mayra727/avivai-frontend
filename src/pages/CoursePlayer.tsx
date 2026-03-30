import { useState } from "react";
import "./CoursePlayer.css";

const courseMock = {
  title: "Vida Espiritual Destravada",
  modules: [
    {
      title: "Módulo 1",
      lessons: [
        {
          id: 1,
          title: "Aula em vídeo",
          type: "video",
          content: "/videos/aula1.mp4"
        },
        {
          id: 2,
          title: "Material PDF",
          type: "pdf",
          content: "/pdfs/material.pdf"
        },
        {
          id: 3,
          title: "Imagem",
          type: "image",
          content: "/images/exemplo.jpg"
        },
        {
          id: 4,
          title: "Devocional",
          type: "text",
          content: "Deus quer ter relacionamento com você todos os dias..."
        }
      ]
    }
  ]
};

export default function CoursePlayer() {

  const allLessons = courseMock.modules.flatMap(m => m.lessons);

  const [currentLesson, setCurrentLesson] = useState(allLessons[0]);
  const [completed, setCompleted] = useState<number[]>([]);

  function toggleComplete(id: number) {
    if (completed.includes(id)) {
      setCompleted(completed.filter(l => l !== id));
    } else {
      setCompleted([...completed, id]);
    }
  }

  const progress = Math.round((completed.length / allLessons.length) * 100);

  return (
    <div className="player">

      {/* CONTEÚDO */}
      <div className="content">

        <h2>{currentLesson.title}</h2>

        {/* 🎯 RENDER DINÂMICO */}
        {currentLesson.type === "video" && (
          <video controls className="video-player">
            <source src={currentLesson.content} />
          </video>
        )}

        {currentLesson.type === "pdf" && (
          <iframe
            src={currentLesson.content}
            className="pdf-viewer"
          />
        )}

        {currentLesson.type === "image" && (
          <img
            src={currentLesson.content}
            className="image-viewer"
          />
        )}

        {currentLesson.type === "text" && (
          <div className="text-viewer">
            {currentLesson.content}
          </div>
        )}

      </div>

      {/* SIDEBAR */}
      <div className="sidebar">

        <h3>Conteúdo</h3>

        <div className="progress">
          Progresso: {progress}%
        </div>

        {courseMock.modules.map((module, mIndex) => (
          <div key={mIndex}>

            <h4>{module.title}</h4>

            {module.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`lesson ${
                  lesson.id === currentLesson.id ? "active" : ""
                }`}
              >

                <span onClick={() => setCurrentLesson(lesson)}>
                  {lesson.title}
                </span>

                <input
                  type="checkbox"
                  checked={completed.includes(lesson.id)}
                  onChange={() => toggleComplete(lesson.id)}
                />

              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  );
}