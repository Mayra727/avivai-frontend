import { useNavigate } from "react-router-dom";
import "./Producer.css";

export default function ProducerDashboard() {

  const navigate = useNavigate();

  return (

    <div className="producer">

      <h1>Painel do Produtor</h1>

      <p className="subtitle">
        Gerencie seus conteúdos e alunos
      </p>

      <div className="producer-grid">

        <div
          className="producer-card"
          onClick={() => navigate("/criar-curso")}
        >
          <h3>📚 Criar Curso</h3>
          <p>Adicione módulos e aulas</p>
        </div>

        <div
          className="producer-card"
          onClick={() => navigate("/meus-cursos")}
        >
          <h3>🎥 Meus Cursos</h3>
          <p>Gerencie cursos criados</p>
        </div>

        <div
          className="producer-card"
          onClick={() => navigate("/criar-ebook")}
        >
          <h3>📘 Criar Ebook</h3>
          <p>Venda seu material digital</p>
        </div>

        <div
          className="producer-card"
          onClick={() => navigate("/biblioteca")}
        >
          <h3>📚 Biblioteca</h3>
          <p>Veja ebooks cadastrados</p>
        </div>

        <div
          className="producer-card"
          onClick={() => navigate("/criar-mentoria")}
        >
          <h3>🎓 Mentoria</h3>
          <p>Gerencie alunos e encontros</p>
        </div>

        <div
          className="producer-card"
          onClick={() => navigate("/alunos")}
        >
          <h3>👥 Alunos</h3>
          <p>Veja quem comprou</p>
        </div>

        <div className="producer-card">
          <h3>💰 Vendas</h3>
          <p>Em breve</p>
        </div>

        <div className="producer-card">
          <h3>📈 Estatísticas</h3>
          <p>Em breve</p>
        </div>

      </div>

    </div>
  );
}