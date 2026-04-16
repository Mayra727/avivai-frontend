import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const [cursos, setCursos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://avivai-backend-production.up.railway.app/courses")
      .then(res => res.json())
      .then((data) => {
        setCursos(data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "60px", maxWidth: "1000px", margin: "0 auto" }}>

      <h1>🎓 Meus Cursos</h1>

      {/* LOADING */}
      {loading && <p>Carregando cursos...</p>}

      {/* SEM CURSOS */}
      {!loading && cursos.length === 0 && (
        <p>Você ainda não criou nenhum curso.</p>
      )}

      {/* LISTA */}
      <div style={{
        display: "grid",
        gap: "20px",
        marginTop: "30px"
      }}>

        {cursos.map((curso, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
            }}
          >

            <h3>{curso.title}</h3>

            <p style={{ color: "#666" }}>
              💰 R$ {curso.price}
            </p>

            <Link to={`/curso/${curso._id}`}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  background: "#8B4533",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Abrir Curso
              </button>
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}