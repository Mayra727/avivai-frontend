import { useEffect, useState } from "react";
import { API_URL } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MyCourses() {

  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { user } = useAuth();

  // =========================
  // LOAD COURSES
  // =========================

  useEffect(() => {

    if (!user) {
      setLoading(false);
      return;
    }

    const userId = user.id;

    async function loadCourses() {

      try {

        const response = await fetch(
          `${API_URL}/producer-courses/${userId}`
        );

        const data = await response.json();

        setCourses(data);

      } catch (error) {

        console.error(
          "Erro ao carregar cursos:",
          error
        );

      } finally {

        setLoading(false);
      }
    }

    loadCourses();

  }, [user]);

  // =========================
  // CERTIFICADO
  // =========================

  function baixarCertificado(courseId: string) {

    if (!user) return;

    window.open(
      `${API_URL}/certificate/${user.id}/${courseId}`,
      "_blank"
    );
  }

  // =========================
  // EXCLUIR CURSO
  // =========================

  async function deleteCourse(courseId: string) {

    const confirmDelete = window.confirm(
      "Deseja excluir este curso?"
    );

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `${API_URL}/courses/${courseId}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao excluir");
      }

      setCourses(prev =>
        prev.filter(
          course => course._id !== courseId
        )
      );

      alert("Curso excluído!");

    } catch (error) {

      console.log(error);

      alert("Erro ao excluir curso");
    }
  }

  // =========================
  // RENDER
  // =========================

  return (

    <div
      style={{
        padding: "60px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >

      <h1>🎓 Meus Cursos</h1>

      {loading && (
        <p>Carregando...</p>
      )}

      {!loading && courses.length === 0 && (
        <p>
          Você ainda não criou nenhum curso.
        </p>
      )}

      {courses.map((course) => (

        <div
          key={course._id}
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow:
              "0 5px 15px rgba(0,0,0,0.08)"
          }}
        >

          <h3>{course.title}</h3>

          {course.description && (
            <p style={{ color: "#666" }}>
              {course.description}
            </p>
          )}

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap"
            }}
          >

            {/* ACESSAR */}

            <button
              onClick={() =>
                navigate(`/curso/${course._id}`)
              }
              style={{
                padding: "10px 16px",
                background: "#8B4533",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Acessar Curso
            </button>

            {/* EDITAR */}

            <button
              onClick={() =>
                navigate(
                  `/editar-curso/${course._id}`
                )
              }
              style={{
                padding: "10px 16px",
                background: "#D4A017",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Editar
            </button>

            {/* EXCLUIR */}

            <button
              onClick={() =>
                deleteCourse(course._id)
              }
              style={{
                padding: "10px 16px",
                background: "#C0392B",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Excluir
            </button>

            {/* CERTIFICADO */}

            <button
              onClick={() =>
                baixarCertificado(course._id)
              }
              style={{
                padding: "10px 16px",
                background: "#2E8B57",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Baixar Certificado
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}