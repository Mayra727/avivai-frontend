import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {

const { user } = useAuth();

if(user?.role !== "produtor"){

  return <Navigate to="/" />;

}

  const [cursos, setCursos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    fetch(`https://avivai-backend-production.up.railway.app/courses?creatorId=${userId}`)
      .then(res => res.json())
      .then((data) => {
        setCursos(data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // 🔥 EXCLUIR CURSO
  async function excluirCurso(id: string) {

    const confirmDelete = window.confirm("Tem certeza que deseja excluir este curso?");

    if (!confirmDelete) return;

    try {

      await fetch(`https://avivai-backend-production.up.railway.app/courses/${id}`, {
        method: "DELETE"
      });

      // remove da tela
      setCursos(prev => prev.filter(curso => curso._id !== id));

    } catch (error) {
      console.error("Erro ao excluir curso:", error);
    }
  }

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

        {cursos.map((curso) => (
          <div
            key={curso._id}
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

            {/* BOTÕES */}
            <div style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px"
            }}>

              <Link to={`/curso/${curso._id}`}>
                <button
                  style={{
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

              <button
                onClick={() => excluirCurso(curso._id)}
                style={{
                  padding: "10px 20px",
                  background: "#b00020",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                🗑️ Excluir
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}