import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPayment } from "../services/payment";

export default function Courses() {

  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  const comprarCurso = async () => {

    if (!userId) {
      alert("Você precisa estar logado para comprar.");
      navigate("/login");
      return;
    }

    try {

      const payment = await createPayment(
        "69a07acbf38bdbb559131ea6",
        "O Caminho da Intimidade",
        200
      );

      window.location.href =
        `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${payment.id}`;

    } catch (error) {

      console.error(error);
      alert("Erro ao iniciar pagamento");

    }

  };

  return (
    <div style={{ padding: "60px" }}>
      <h1>Cursos Disponíveis</h1>

      {userId ? (
        <p style={{ color: "green" }}>Você está logado ✅</p>
      ) : (
        <p style={{ color: "red" }}>Você não está logado</p>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <h3>O Caminho da Intimidade</h3>

        <p>
          Uma jornada espiritual profunda para desenvolver relacionamento real com Deus.
        </p>

        <p><strong>R$ 200</strong></p>

        <button
          onClick={comprarCurso}
          style={{
            padding: "10px 20px",
            background: "#8B4533",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Comprar
        </button>

      </div>
    </div>
  );
}