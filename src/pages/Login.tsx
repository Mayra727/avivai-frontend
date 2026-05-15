import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

import { API_URL }
from "../services/api";

import { useAuth }
from "../context/AuthContext";

export default function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {

    try {

      const response =
        await fetch(
          `${API_URL}/login`,
          {

            method: "POST",

            headers: {
              "Content-Type":
              "application/json"
            },

            body: JSON.stringify({
              email,
              password
            })

          }
        );

      const data =
        await response.json();

      console.log(
        "RESPOSTA BACKEND:",
        data
      );

      if (
        response.ok &&
        data.token
      ) {

        login(

          {
            id: data.user.id,
            name: data.user.name,
            role: data.user.role
          },

          data.token

        );

        navigate(
          "/dashboard"
        );

      } else {

        alert(
          data.error ||
          "Erro no login"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Erro ao conectar com servidor"
      );

    }

  }

  return (

    <div
      style={{
        padding: "60px"
      }}
    >

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={handleLogin}
      >
        Entrar
      </button>

      <p
        style={{
          marginTop:"15px",
          textAlign:"center",
          cursor:"pointer",
          color:"#7A4A3A"
        }}

        onClick={() =>
          navigate(
            "/forgot-password"
          )
        }
      >

        Esqueci minha senha

      </p>

    </div>

  );

}