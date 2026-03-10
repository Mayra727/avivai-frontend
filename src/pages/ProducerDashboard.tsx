import { useState } from "react";
import { useCourses } from "../context/CourseContext";

export default function ProducerDashboard() {
  const { cursos, adicionarCurso, publicarCurso } = useCourses();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");

  function criarCurso() {
    if (!titulo || !descricao || !preco) return;

    adicionarCurso({
      id: Date.now(),
      titulo,
      descricao,
      preco: Number(preco),
      categoria,
      publicado: false,
    });

    setTitulo("");
    setDescricao("");
    setPreco("");
    setCategoria("");
  }

  return (
    <div style={{ padding: "60px" }}>
      <h1>Painel do Produtor</h1>

      <div style={box}>
        <h2>Criar Novo Curso</h2>

        <input
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={input}
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={input}
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          style={input}
        />

        <input
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={input}
        />

        <button onClick={criarCurso} style={button}>
          Criar Curso
        </button>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Meus Cursos</h2>

        {cursos.map((curso) => (
          <div key={curso.id} style={cursoBox}>
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <p>R$ {curso.preco.toFixed(2)}</p>
            <p>Status: {curso.publicado ? "Publicado" : "Rascunho"}</p>

            {!curso.publicado && (
              <button
                onClick={() => publicarCurso(curso.id)}
                style={{ ...button, background: "#2e7d32" }}
              >
                Publicar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const box: React.CSSProperties = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
};

const input: React.CSSProperties = {
  display: "block",
  width: "100%",
  marginTop: "15px",
  padding: "10px",
};

const button: React.CSSProperties = {
  marginTop: "20px",
  padding: "10px 20px",
  background: "#5A3A2E",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const cursoBox: React.CSSProperties = {
  marginTop: "20px",
  padding: "20px",
  background: "#f9f9f9",
  borderRadius: "10px",
};