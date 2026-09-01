export const API_URL =
  import.meta.env.DEV
    ? "http://localhost:8080"
    : "https://avivai-backend-production.up.railway.app";

export async function register(name: string, email: string, password: string) {

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  return response.json();
}

export async function login(email: string, password: string) {

  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  return response.json();
}