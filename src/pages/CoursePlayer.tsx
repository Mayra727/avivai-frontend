import "./CoursePlayer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/api";

export default function CoursePlayer() {

  const { id } = useParams();

  const user =
  JSON.parse(
    localStorage.getItem("user") || "{}"
  );

const courseId = id;

  const [course, setCourse] = useState<any>(null);
  const [currentLesson, setCurrentLesson] = useState<any>(null);

  const [progress, setProgress] =
  useState<string[]>([]);

const totalLessons =
  course?.modules?.flatMap(
    (m: any) => m.lessons
  ).length || 0;

const progressPercent =
  totalLessons > 0
    ? Math.round(
        (progress.length /
          totalLessons) * 100
      )
    : 0;

  function isModuleUnlocked(
  moduleIndex: number
) {

  // 🔓 primeiro módulo sempre liberado

  if (moduleIndex === 0) {
    return true;
  }

  const previousModule =
    course.modules[moduleIndex - 1];

  // 🔥 verifica se TODAS aulas foram concluídas

  return previousModule.lessons.every(
    (lesson: any) =>

      progress.includes(
        lesson.title
      )
  );
}

async function completeLesson(
  lessonId: string
) {

  try {

    await fetch(
      `${API_URL}/progress`,
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          userId: user.id,

          courseId,

          lessonId,

          completed: true
        })
      }
    );

    setProgress((prev) => [
      ...prev,
      lessonId
    ]);

  } catch (error) {

    console.log(error);
  }
}

  // =========================
  // LOAD COURSE
  // =========================

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

        // 🔥 PRIMEIRA AULA AUTOMÁTICA
        if (
          data?.modules &&
          data.modules.length > 0 &&
          data.modules[0]?.lessons &&
          data.modules[0].lessons.length > 0
        ) {

          setCurrentLesson(
            data.modules[0].lessons[0]
          );
        }

      } catch (error) {

        console.log("❌ ERRO:", error);
      }
    }

    loadCourse();

  }, [id]);

useEffect(() => {

  async function loadProgress() {

    if (!user || !courseId) return;

    try {

      const response = await fetch(
        `https://avivai-backend-production.up.railway.app/progress/${user.id}/${courseId}`
      );

      const data = await response.json();

      const completedLessons =
        data.map(
          (item: any) => item.lessonId
        );

      setProgress(completedLessons);

    } catch (error) {

      console.log(error);
    }
  }

  loadProgress();

}, [user, courseId]);

  // =========================
  // LOADING
  // =========================

  if (!course) {

    return (
      <div
        style={{
          padding: "40px",
          color: "white",
          background: "#141414",
          minHeight: "100vh"
        }}
      >
        Carregando curso...
      </div>
    );
  }

  return (

    <div className="netflix-player">

      {/* SIDEBAR */}

      <div className="netflix-sidebar">

        <h2 className="course-title">
          {course.title}
        </h2>

        {course.modules?.map(
          (module: any, moduleIndex: number) => (

            <div
              key={moduleIndex}
              className="module-block"
            >

              <h3>{module.title}</h3>

{
  !isModuleUnlocked(moduleIndex) && (

    <div className="locked-module">
      🔒 Módulo bloqueado
    </div>

  )
}

              {
  isModuleUnlocked(moduleIndex) &&

  module.lessons?.map(
                (
                  lesson: any,
                  lessonIndex: number
                ) => (
                  

                <div
  key={lessonIndex}

  onClick={() =>
    setCurrentLesson(lesson)
  }

  className={`lesson-item ${
    currentLesson === lesson
      ? "active"
      : ""
  }`}
>

  ▶ {lesson.title}

  {
    progress.includes(
  lesson.title
) && (
      <span>
        {" "}✅
      </span>
    )
  }

</div>

                )
              )}

            </div>

          )
        )}

      </div>

      {/* PLAYER */}

      <div className="netflix-content">

        {currentLesson ? (

          <>

            <h1>{currentLesson.title}</h1>

<div
  style={{
    marginBottom: "30px",
    padding: "15px",
    background: "#f5f1ee",
    borderRadius: "14px"
  }}
>

  <p
    style={{
      color: "#7A4A3A",
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "12px"
    }}
  >
    Progresso: {progressPercent}%
  </p>

  <div
    style={{
      width: "100%",
      height: "18px",
      background: "#ddd",
      borderRadius: "30px",
      overflow: "hidden"
    }}
  >

    <div
      style={{
        width: `${progressPercent}%`,
        height: "100%",
        background: "#7A4A3A",
        borderRadius: "30px",
        transition: "all .4s ease"
      }}
    />

  </div>

</div>

            {/* VIDEO */}

            {currentLesson.type === "video" && (

              <video
  key={currentLesson.content}
  controls
  autoPlay
  className="netflix-video"
>

                <source
                  src={currentLesson.content}
                  type="video/mp4"
                />

              </video>

            )}

            {/* PDF */}

            {currentLesson.type === "pdf" && (

              <iframe
                src={currentLesson.content}
                className="pdf-content"
              />

            )}

            {/* IMAGE */}

            {currentLesson.type === "image" && (

              <img
                src={currentLesson.content}
                className="image-content"
              />

            )}

            {/* TEXT */}

            {currentLesson.type === "text" && (

              <div className="text-content">

                {currentLesson.content}

              </div>

            )}

<button
  onClick={() =>
    completeLesson(
  currentLesson.title
)
  }

    style={{
    marginTop: "20px",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#7A4A3A",
    color: "white",
    cursor: "pointer"
  }}
>
  ✅ Concluir aula
</button>


          </>

        ) : (

          <p style={{ color: "white" }}>
            Nenhuma aula encontrada
          </p>

        )}

      </div>

    </div>
  );
}