import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../services/api";

export default function PaymentSuccess() {

  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {

    console.log("PaymentSuccess carregou");

    async function verifyPayment() {

   console.log("params completos:", Object.fromEntries(params.entries()));   

      const paymentId =
  params.get("payment_id") ||
  params.get("collection_id") ||
  params.get("id");

      console.log("paymentId recebido:", paymentId);

      if (!paymentId) {
        console.log("Payment ID não encontrado");
        navigate("/dashboard");
        return;
      }

      try {

        console.log("Chamando backend:", `${API_URL}/verify-payment/${paymentId}`);

        const response = await fetch(
          `${API_URL}/verify-payment/${paymentId}`
        );

        const data = await response.json();

        console.log("Resposta do backend:", data);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);

      } catch (error) {

        console.log("Erro ao verificar pagamento:", error);
        navigate("/dashboard");

      }

    }

    verifyPayment();

  }, []);

  return (
    <div style={{ padding: "60px" }}>
      <h1>Pagamento aprovado 🎉</h1>
      <p>Liberando seu curso...</p>
    </div>
  );

}