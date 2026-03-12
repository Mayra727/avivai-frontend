import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/api";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("aluno");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {

      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Conta criada com sucesso!");
        navigate("/login");
      } else {
        alert(data.error);
      }

    } catch (error) {
      console.log(error);
      alert("Erro ao registrar");
    }
  };

  return (
    <div style={{ padding: "60px" }}>
      <h1>Criar Conta</h1>

      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Crie uma senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <label>Tipo de conta:</label>
      <br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="aluno">Aluno</option>
        <option value="produtor">Produtor</option>
      </select>

      <br /><br />

      <button onClick={handleRegister}>
        Cadastrar
      </button>
    </div>
  );
}