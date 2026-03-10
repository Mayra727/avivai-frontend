import { API_URL } from "./api";

export async function createPayment(
  courseId: string,
  title: string,
  price: number
) {

  const userId = localStorage.getItem("userId");

  const response = await fetch(`${API_URL}/create-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      courseId,
      title,
      price,
      userId
    })
  });

  if (!response.ok) {
    throw new Error("Erro ao conectar com pagamento");
  }

  const data = await response.json();

  return data;
}