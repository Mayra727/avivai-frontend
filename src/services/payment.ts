import { API_URL } from "./api";

export async function createPayment(
  courseId: string,
  title: string,
  price: number
) {

  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(`${API_URL}/create-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` // 🔥 AQUI ESTÁ O SEGREDO
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