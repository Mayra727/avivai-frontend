import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#F8F5F1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px"
      }}
    >

      <div
        style={{
          background: "#fff",
          padding: "50px",
          borderRadius: "24px",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.08)"
        }}
      >

        <h1
          style={{
            color: "#7A4A3A",
            fontSize: "42px",
            marginBottom: "20px"
          }}
        >

          🎉 Pagamento recebido

        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#444"
          }}
        >

          Seu pagamento foi processado
          com sucesso.

          <br /><br />

          Seu acesso será liberado
          manualmente pela nossa equipe
          após a confirmação do pagamento.

          <br /><br />

          Caso queira agilizar,
          envie o comprovante no WhatsApp.

        </p>

        <a
          href="https://wa.me/5541999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "25px",
            color: "#7A4A3A",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "16px"
          }}
        >

          📲 Enviar comprovante no WhatsApp

        </a>

        <button

          onClick={() =>
            navigate("/meus-cursos")
          }

          style={{
            marginTop: "35px",
            padding: "16px 32px",
            border: "none",
            borderRadius: "12px",
            background: "#7A4A3A",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "600"
          }}

        >

          Ir para meus cursos

        </button>

      </div>

    </div>

  );

}