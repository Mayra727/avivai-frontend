import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e:any
  ){

    e.preventDefault();

    try{

      setLoading(true);

      const response =
        await fetch(

"https://avivai-backend-production.up.railway.app/forgot-password",

        {

          method:"POST",

          headers:{
            "Content-Type":
            "application/json"
          },

          body:JSON.stringify({
            email
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
"Verifique o email (token no Railway logs)"
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
        onSubmit={handleSubmit}

        style={{
          background:"#fff",
          padding:"40px",
          borderRadius:"20px",
          width:"350px"
        }}
      >

        <h1>
          Recuperar senha
        </h1>

        <input

          type="email"

          placeholder="Seu email"

          value={email}

          onChange={(e)=>
            setEmail(
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
            ? "Enviando..."
            : "Recuperar senha"
          }

        </button>

      </form>

    </div>

  );

}