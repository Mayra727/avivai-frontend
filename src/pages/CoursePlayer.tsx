import "./CoursePlayer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../services/api";

export default function CoursePlayer() {

  const { id } = useParams();

  const [course, setCourse] = useState<any>(null);
  const [currentLesson, setCurrentLesson] = useState<any>(null);

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

              {module.lessons?.map(
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

<p
  style={{
    color: "white",
    fontSize: "12px",
    marginBottom: "20px",
    wordBreak: "break-all"
  }}
>
  {currentLesson.content}
</p>

            {/* VIDEO */}

            {currentLesson.type === "video" && (

              <video
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