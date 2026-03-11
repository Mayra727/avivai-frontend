import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../services/api";

export default function PaymentSuccess() {

  const navigate = useNavigate();
  const [params] = useSearchParams();

  useEffect(() => {

    async function verifyPayment() {

      const paymentId = params.get("payment_id") || params.get("collection_id");

      if (!paymentId) {
        console.log("Payment ID não encontrado");
        navigate("/my-courses");
        return;
      }

      try {

        await fetch(`${API_URL}/verify-payment/${paymentId}`);

        setTimeout(() => {
          navigate("/my-courses");
        }, 2000);

      } catch (error) {

        console.log(error);
        navigate("/my-courses");

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