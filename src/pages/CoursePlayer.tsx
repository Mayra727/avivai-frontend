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
  const [allowed, setAllowed] = useState(true);

  const [course, setCourse] = useState<any>(null);

  const [currentLesson, setCurrentLesson] =
    useState<any>(null);

  const [completed, setCompleted] =
    useState<number[]>([]);

  /* =========================
     PROTEÇÃO
  ========================= */

  useEffect(() => {

    if (!id) return;

    if (!user) {
      navigate("/login");
      return;
    }

    async function checkAccess() {

      try {

        const response = await fetch(
          `${API_URL}/check-access/${user?.id}/${id}`
        );

        const data = await response.json();

        console.log("🔥 ACCESS:", data);

        if (data.allowed) {

          setAllowed(true);

        } else {

          alert("Você não possui acesso");

          navigate("/meus-cursos");
        }

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    }

    checkAccess();

  }, [id, user]);

  /* =========================
     CARREGAR CURSO
  ========================= */

  useEffect(() => {

    if (!id) return;

    async function loadCourse() {

      try {

        const response = await fetch(
          `${API_URL}/courses/${id}`
        );

        const data = await response.json();

        console.log("🔥 COURSE:", data);

        setCourse(data);

      } catch (error) {

        console.error(
          "Erro ao carregar curso:",
          error
        );
      }
    }

    loadCourse();

  }, [id]);

  /* =========================
     PRIMEIRA AULA
  ========================= */

  useEffect(() => {

  console.log("🔥 COURSE MODULES:", course?.modules);

  if (
    course?.modules &&
    course.modules.length > 0 &&
    course.modules[0].lessons &&
    course.modules[0].lessons.length > 0
  ) {

    const firstLesson =
      course.modules[0].lessons[0];

    console.log("🔥 FIRST LESSON:", firstLesson);

    setCurrentLesson(firstLesson);
  }

}, [course]);

  /* =========================
     AULAS
  ========================= */

  const allLessons =
    course?.modules?.flatMap(
      (m: any) => m.lessons
    ) || [];

  /* =========================
     PROGRESSO
  ========================= */

  const progress =
    allLessons.length > 0
      ? Math.round(
          (completed.length / allLessons.length) * 100
        )
      : 0;

  /* =========================
     CONCLUIR
  ========================= */

  function toggleComplete(index: number) {

    if (completed.includes(index)) {

      setCompleted(
        completed.filter((i) => i !== index)
      );

    } else {

      setCompleted([...completed, index]);
    }
  }

  /* =========================
     ESTADOS
  ========================= */

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!allowed) {

  return (
    <div style={{ padding: "40px" }}>
      <h2>Sem acesso</h2>
    </div>
  );
}

  if (!course) {
    return <p>Curso não encontrado</p>;
  }

  if (!currentLesson) {
    return <p>Nenhuma aula encontrada</p>;
  }

  /* =========================
     INDEX AULA ATUAL
  ========================= */

  const currentLessonIndex =
    allLessons.findIndex(
      (l: any) => l === currentLesson
    );

  return (

    <div
  style={{
    display: "flex",
    minHeight: "100vh",
    background: "#f5f1ed",
    color: "#000"
  }}
>

      {/* =========================
          CONTEÚDO
      ========================= */}

      <div
  style={{
    flex: 1,
    padding: "40px"
  }}
>

        <h2>{currentLesson.title}</h2>

        {/* VIDEO */}

        {currentLesson.type === "video" && (

          <video
            controls
            style={{
  width: "100%",
  borderRadius: "12px",
  marginTop: "20px"
}}
            onEnded={() =>
              toggleComplete(currentLessonIndex)
            }
          >

            <source
              src={currentLesson.content}
              type="video/mp4"
            />

          </video>

        )}

        {/* PDF */}

        {currentLesson.type === "pdf" && (

          <div>

            <iframe
              src={currentLesson.content}
              className="pdf-viewer"
              title="PDF"
            />

            <button
              onClick={() =>
                toggleComplete(currentLessonIndex)
              }
            >
              Marcar como concluído
            </button>

          </div>

        )}

        {/* IMAGEM */}

        {currentLesson.type === "image" && (

          <img
            src={currentLesson.content}
            className="image-viewer"
          />

        )}

        {/* TEXTO */}

        {currentLesson.type === "text" && (

          <div className="text-viewer">

            <p>{currentLesson.content}</p>

            <button
              onClick={() =>
                toggleComplete(currentLessonIndex)
              }
            >
              Marcar como concluído
            </button>

          </div>

        )}

      </div>

      {/* =========================
          SIDEBAR
      ========================= */}

      <div
  style={{
    width: "320px",
    background: "#fff",
    padding: "20px",
    borderLeft: "1px solid #ddd"
  }}
>

        <h3>Conteúdo</h3>

        <div className="progress">
          Progresso: {progress}%
        </div>

        {course?.modules?.map(
          (module: any, moduleIndex: number) => (

            <div
              key={moduleIndex}
              className="module"
            >

              <h4>{module.title}</h4>

              {module.lessons?.map(
                (
                  lesson: any,
                  lessonIndex: number
                ) => (

                  <div
                    key={lessonIndex}
                    className={`lesson ${
                      lesson === currentLesson
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setCurrentLesson(lesson)
                    }
                  >

                    <span>
                      {lesson.title}
                    </span>

                    <span>
                      {completed.includes(
                        allLessons.findIndex(
                          (l: any) => l === lesson
                        )
                      )
                        ? "✅"
                        : "⬜"}
                    </span>

                  </div>

                )
              )}

            </div>

          )
        )}

      </div>

    </div>
  );
}