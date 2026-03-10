import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../services/api";

type Curso = {
  _id: string;
  title: string;
};

export default function Dashboard() {

  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {

    const userId = localStorage.getItem("userId");

    if (!userId) return;

    fetch(`${API_URL}/,{userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Cursos recebidos:", data);
        setCursos(data);
      })
      .catch(err => console.error(err));

  }, []);

  return (
    <div style={{ padding: "60px" }}>

      <h1>Meus Cursos</h1>

      {cursos.length === 0 && (
        <p>Você ainda não adquiriu nenhum curso.</p>
      )}

      {cursos.map((curso) => (
        <div
          key={curso._id}
          style={{
            padding: "20px",
            background: "#fff",
            marginTop: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>{curso.title}</h3>

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
  );
}