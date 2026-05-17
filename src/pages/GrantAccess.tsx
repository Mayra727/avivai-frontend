import { useState } from "react";
import { API_URL } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function GrantAccess() {

const { user } = useAuth();

if(
  user?.role !== "produtor" &&
  user?.role !== "superadmin"
){

  return <Navigate to="/" />;

}

  const [userId, setUserId] =
    useState("");

  const [courseId, setCourseId] =
    useState("");

  async function handleGrant() {

    try {

      const response =
        await fetch(

`${API_URL}/grant-access`,

          {

            method:"POST",

            headers:{
              "Content-Type":
              "application/json"
            },

            body:JSON.stringify({

              userId,
              courseId

            })

          }

        );

      const data =
        await response.json();

      console.log(data);

      alert(
        "Acesso liberado!"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Erro ao liberar"
      );

    }

  }

  return (

    <div
      style={{
        padding:"60px",
        maxWidth:"500px",
        margin:"0 auto"
      }}
    >

      <h1>
        🔓 Liberar acesso
      </h1>

      <input

        placeholder="User ID"

        value={userId}

        onChange={(e)=>
          setUserId(
            e.target.value
          )
        }

        style={{
          width:"100%",
          padding:"14px",
          marginTop:"20px"
        }}

      />

      <input

        placeholder="Course ID"

        value={courseId}

        onChange={(e)=>
          setCourseId(
            e.target.value
          )
        }

        style={{
          width:"100%",
          padding:"14px",
          marginTop:"20px"
        }}

      />

      <button

        onClick={handleGrant}

        style={{
          marginTop:"25px",
          width:"100%",
          padding:"16px",
          border:"none",
          borderRadius:"10px",
          background:"#7A4A3A",
          color:"#fff",
          cursor:"pointer"
        }}

      >

        Liberar acesso

      </button>

    </div>

  );

}