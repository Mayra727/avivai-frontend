import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Cadastro:", form);

    // 🔥 aqui depois conecta com backend
    navigate("/dashboard");
  }

  return (
    <div className="register-page">

      <div className="register-container">

        <h1>Crie sua conta</h1>
        <p className="subtitle">
          Comece sua transformação espiritual agora
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Crie uma senha"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Criar conta
          </button>

        </form>

        <span className="login-link">
          Já tem conta?{" "}
          <a onClick={() => navigate("/login")}>
            Entrar
          </a>
        </span>

      </div>

    </div>
  );
}