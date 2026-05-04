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

        // 🔥 primeira aula automática
        if (
          data?.modules &&
          data.modules.length > 0 &&
          data.modules[0].lessons &&
          data.modules[0].lessons.length > 0
        ) {

          setCurrentLesson(
            data.modules[0].lessons[0]
          );
        }

      } catch (error) {

        console.log(error);
      }
    }

    loadCourse();

  }, [id]);

  // =========================
  // LOADING
  // =========================

  if (!course) {

    return (
      <div style={{ padding: "40px" }}>
        Carregando curso...
      </div>
    );
  }

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f1ed"
      }}
    >

      {/* SIDEBAR */}

      <div
        style={{
          width: "320px",
          background: "#fff",
          padding: "20px",
          borderRight: "1px solid #ddd"
        }}
      >

        <h2>{course.title}</h2>

        {course.modules?.map(
          (module: any, moduleIndex: number) => (

            <div
              key={moduleIndex}
              style={{ marginTop: "20px" }}
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
                    style={{
                      padding: "12px",
                      marginTop: "10px",
                      cursor: "pointer",
                      borderRadius: "8px",
                      background:
                        currentLesson === lesson
                          ? "#8B5E3C"
                          : "#eee",
                      color:
                        currentLesson === lesson
                          ? "#fff"
                          : "#000"
                    }}
                  >

                    {lesson.title}

                  </div>

                )
              )}

            </div>

          )
        )}

      </div>

      {/* PLAYER */}

      <div
        style={{
          flex: 1,
          padding: "40px"
        }}
      >

        {currentLesson ? (

          <>

            <h1>{currentLesson.title}</h1>

            {/* VIDEO */}

            {currentLesson.type === "video" && (

              <video
                controls
                style={{
                  width: "100%",
                  marginTop: "20px",
                  borderRadius: "12px"
                }}
              >

                <source
                  src={currentLesson.content?.trim()}
                  type="video/mp4"
                />

              </video>

            )}

            {/* PDF */}

            {currentLesson.type === "pdf" && (

              <iframe
                src={currentLesson.content}
                style={{
                  width: "100%",
                  height: "80vh",
                  border: "none"
                }}
              />

            )}

            {/* IMAGE */}

            {currentLesson.type === "image" && (

              <img
                src={currentLesson.content}
                style={{
                  width: "100%",
                  borderRadius: "12px"
                }}
              />

            )}

            {/* TEXT */}

            {currentLesson.type === "text" && (

              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px"
                }}
              >

                {currentLesson.content}

              </div>

            )}

          </>

        ) : (

          <p>Nenhuma aula encontrada</p>

        )}

      </div>

    </div>
  );
}