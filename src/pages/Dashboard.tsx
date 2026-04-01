import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const [curso, setCurso] = useState<any>(null);

  useEffect(() => {

    const cursoSalvo = localStorage.getItem("curso");

    if (cursoSalvo) {
      setCurso(JSON.parse(cursoSalvo));
    }

  }, []);

  return (
    <div style={{ padding: "60px" }}>

      <h1>Meus Cursos</h1>

      {!curso && (
        <p>Você ainda não criou nenhum curso.</p>
      )}

      {curso && (
        <div
          style={{
            padding: "20px",
            background: "#fff",
            marginTop: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>{curso.title}</h3>

          <Link to="/curso-teste">
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
      )}

    </div>
  );
}