import { useState } from "react";
import "./CoursePlayer.css";

const lessonsMock = [
  {
    id: 1,
    title: "Introdução",
    video: "/videos/aula1.mp4"
  },
  {
    id: 2,
    title: "Intimidade com Deus",
    video: "/videos/aula2.mp4"
  }
];

export default function CoursePlayer() {

  const [currentLesson, setCurrentLesson] = useState(lessonsMock[0]);
  const [completed, setCompleted] = useState<number[]>([]);

  function toggleComplete(id: number) {
    if (completed.includes(id)) {
      setCompleted(completed.filter(l => l !== id));
    } else {
      setCompleted([...completed, id]);
    }
  }

  const progress = Math.round((completed.length / lessonsMock.length) * 100);

  return (
    <div className="player">

      {/* 🎥 VIDEO REAL */}
      <div className="video">
        <video
          key={currentLesson.video}
          controls
          controlsList="nodownload"
        >
          <source src={currentLesson.video} type="video/mp4" />
        </video>
      </div>

      {/* SIDEBAR */}
      <div className="sidebar">

        <h3>Conteúdo do curso</h3>

        <div className="progress">
          Progresso: {progress}%
        </div>

        {lessonsMock.map((lesson) => (
          <div
            key={lesson.id}
            className={`lesson ${lesson.id === currentLesson.id ? "active" : ""}`}
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

    </div>
  );
}