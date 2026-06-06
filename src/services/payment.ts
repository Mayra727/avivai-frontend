import { API_URL } from "./api";

export async function createPayment(
  courseId: string,
  title: string,
  price: number
) {

  const response = await fetch(
  `${API_URL}/create-checkout`, {
    
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },

    body: JSON.stringify({
      courseId,
      title,
      price
    })
  });

  if (!response.ok) {
    throw new Error("Erro ao conectar com pagamento");
  }

  const data = await response.json();

  return data;
}