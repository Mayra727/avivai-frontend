import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../services/api";

export default function PaymentSuccess() {

  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {

    async function verifyPayment() {

      // MercadoPago pode mandar payment_id ou collection_id
      const paymentId =
        params.get("payment_id") || params.get("collection_id");

      if (!paymentId) {
        console.log("Payment ID não encontrado");
        navigate("/dashboard");
        return;
      }

      try {

        const response = await fetch(
          `${API_URL}/verify-payment/${paymentId}`
        );

        const data = await response.json();

        console.log("verify payment:", data);

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);

      } catch (error) {

        console.log(error);
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