import { useCourses } from "../context/CourseContext";

export default function Home() {
  const { cursos } = useCourses();

  return (
    <div style={{ padding: "60px" }}>
      <h1>Cursos Disponíveis</h1>

      {cursos.length === 0 && (
        <p>Nenhum curso disponível no momento.</p>
      )}

      {cursos.map((curso) => (
        <div
          key={curso.id}
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>{curso.titulo}</h3>

          <p>{curso.descricao}</p>

          <p>
            <strong>R$ {curso.preco.toFixed(2)}</strong>
          </p>

          <p>Categoria: {curso.categoria}</p>

          <p>
            Status:{" "}
            {curso.publicado ? "Publicado" : "Rascunho"}
          </p>
        </div>
      ))}
    </div>
  );
}