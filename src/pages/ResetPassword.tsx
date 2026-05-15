import { useState } from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

export default function ResetPassword() {

  const navigate =
    useNavigate();

  const { token } =
    useParams();

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleReset(
    e:any
  ){

    e.preventDefault();

    try{

      setLoading(true);

      const response =
        await fetch(

"https://avivai-backend-production.up.railway.app/reset-password",

        {

          method:"POST",

          headers:{
            "Content-Type":
            "application/json"
          },

          body:JSON.stringify({

            token,

            password

          })

        }

      );

      const data =
        await response.json();

      if(!response.ok){

        alert(
          data.error
        );

        return;
      }

      alert(
        "Senha alterada!"
      );

      navigate("/login");

    }catch(error){

      console.log(error);

      alert(
        "Erro servidor"
      );

    }finally{

      setLoading(false);

    }

  }

  return(

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#141414"
      }}
    >

      <form
        onSubmit={handleReset}

        style={{
          background:"#fff",
          padding:"40px",
          borderRadius:"20px",
          width:"350px"
        }}
      >

        <h1>
          Nova senha
        </h1>

        <input

          type="password"

          placeholder="Nova senha"

          value={password}

          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }

          required

          style={{
            width:"100%",
            padding:"12px",
            marginTop:"20px"
          }}

        />

        <button

          type="submit"

          disabled={loading}

          style={{
            width:"100%",
            padding:"12px",
            marginTop:"20px",
            background:"#7A4A3A",
            color:"#fff",
            border:"none",
            borderRadius:"10px"
          }}

        >

          {
            loading
            ? "Salvando..."
            : "Salvar nova senha"
          }

        </button>

      </form>

    </div>

  );

}