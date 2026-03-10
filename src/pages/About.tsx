import { useCourses } from "../context/CourseContext";
import "./Home.css";

export default function Home() {
  const { cursos } = useCourses();
  const cursosPublicados = cursos.filter((c) => c.publicado);

  return (
    <div className="home-container">
      {/* HERO FIXO */}
      <section className="hero">
        <h1>AVIVAI — Uma Jornada de Intimidade com Deus</h1>
        <p>
          Cresça em fé, profundidade e relacionamento com Deus através
          de ensinamentos fundamentados e transformadores.
        </p>
      </section>

      {/* CURSOS */}
      <section className="courses-section">
        <h2>Nossos Cursos</h2>

        {cursosPublicados.length === 0 && (
          <p className="no-course">
            Nenhum curso disponível ainda.
          </p>
        )}

        <div className="courses-grid">
          {cursosPublicados.map((curso) => (
            <div key={curso.id} className="course-card">
              <h3>{curso.titulo}</h3>
              <p>{curso.descricao}</p>
              <strong>R$ {curso.preco.toFixed(2)}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}