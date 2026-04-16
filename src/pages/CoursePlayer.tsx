import "./CoursePlayer.css";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../services/api";

export default function CoursePlayer() {

  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [course, setCourse] = useState<any>(null);
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  // 🔐 CHECK DE ACESSO
  useEffect(() => {

    if (!user) return;

    const userId = user.id;

    async function checkAccess() {
      try {
        const res = await fetch(
          `${API_URL}/check-access/${userId}/${id}`
        );

        const data = await res.json();

        if (data.allowed) {
          setAllowed(true);
        } else {
          alert("Você não tem acesso a esse curso");
          navigate("/meus-cursos");
        }

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    checkAccess();

  }, [user, id]);

  // 📚 BUSCAR CURSO REAL
  useEffect(() => {

    if (!id) return;

    async function loadCourse() {
      try {
        const res = await fetch(`${API_URL}/courses/${id}`);
        const data = await res.json();

        console.log("CURSO:", data);

        setCourse(data);

      } catch (err) {
        console.error("Erro ao carregar curso:", err);
      }
    }

    loadCourse();

  }, [id]);

  // 🎯 DEFINIR PRIMEIRA AULA
  useEffect(() => {
    if (course) {
      const firstLesson = course.modules?.[0]?.lessons?.[0];
      setCurrentLesson(firstLesson);
    }
  }, [course]);

  // ✅ MARCAR COMO CONCLUÍDO
  function toggleComplete(lessonId: number) {
    if (completed.includes(lessonId)) {
      setCompleted(completed.filter(l => l !== lessonId));
    } else {
      setCompleted([...completed, lessonId]);
    }
  }

  // 🚨 PROTEÇÃO
  if (loading) return <p>Carregando...</p>;
  if (!allowed) return null;
  if (!course) return <p>Carregando curso...</p>;
  if (!currentLesson) return <p>Selecione uma aula</p>;

  const allLessons = course.modules.flatMap((m: any) => m.lessons);

  const progress = Math.round(
    (completed.length / allLessons.length) * 100
  );

  return (
    <div className="player">

      {/* 🎥 CONTEÚDO */}
      <div className="content">

        <h2>{currentLesson.title}</h2>

        {currentLesson.type === "video" && (
          <video
            controls
            className="video-player"
            onEnded={() => toggleComplete(currentLesson.id)}
          >
            <source src={currentLesson.content} />
          </video>
        )}

        {currentLesson.type === "pdf" && (
          <div>
            <iframe
              src={currentLesson.content}
              className="pdf-viewer"
            />
            <button onClick={() => toggleComplete(currentLesson.id)}>
              Marcar como concluído
            </button>
          </div>
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
            <button onClick={() => toggleComplete(currentLesson.id)}>
              Marcar como concluído
            </button>
          </div>
        )}

      </div>

      {/* 📚 SIDEBAR */}
      <div className="sidebar">

        <h3>Conteúdo</h3>

        <div className="progress">
          Progresso: {progress}%
        </div>

        {course.modules.map((module: any, mIndex: number) => (
          <div key={mIndex}>

            <h4>{module.title}</h4>

            {module.lessons.map((lesson: any) => (
              <div
                key={lesson.id}
                className={`lesson ${
                  lesson.id === currentLesson.id ? "active" : ""
                }`}
              >

                <span onClick={() => setCurrentLesson(lesson)}>
                  {lesson.title}
                </span>

                <span>
                  {completed.includes(lesson.id) ? "✅" : "⬜"}
                </span>

              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  );
}