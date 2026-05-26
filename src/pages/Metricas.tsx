import { useEffect, useState } from "react";
import axios from "axios";

export default function Metricas(){

  const [users,setUsers] =
    useState(0);

  const [courses,setCourses] =
    useState(0);

  const [revenue,setRevenue] =
    useState(0);

  const [mentorias,setMentorias] =
    useState(0);

  useEffect(()=>{

    async function loadMetrics(){

      try{

        const usersRes =
          await axios.get(
"https://api.avivaioficial.com.br/users"
          );

        const coursesRes =
          await axios.get(
"https://api.avivaioficial.com.br/courses"
          );

        setUsers(
          usersRes.data.length
        );

        setCourses(
          coursesRes.data.length
        );

        // 🔥 SOMA FATURAMENTO

        const total =
          coursesRes.data.reduce(

            (acc:any,course:any)=>
              acc +
              Number(
                course.price || 0
              ),

            0

          );

        setRevenue(total);

        // 🔥 MENTORIAS

        const mentoriasCount =
          coursesRes.data.filter(

            (course:any)=>
              course.category ===
              "mentoria"

          ).length;

        setMentorias(
          mentoriasCount
        );

      }catch(error){

        console.log(error);

      }

    }

    loadMetrics();

  },[]);

  return(

    <div
      style={{
        padding:"60px",
        maxWidth:"1400px",
        margin:"0 auto"
      }}
    >

      <h1
        style={{
          fontSize:"56px",
          color:"#5A3427",
          marginBottom:"50px"
        }}
      >
        📊 Métricas da Plataforma
      </h1>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap:"30px"
        }}
      >

        {/* ALUNOS */}

        <div style={cardStyle}>

          <h2>
            👥 Total de alunos
          </h2>

          <p style={numberStyle}>
            {users}
          </p>

        </div>

        {/* CURSOS */}

        <div style={cardStyle}>

          <h2>
            📚 Cursos vendidos
          </h2>

          <p style={numberStyle}>
            {courses}
          </p>

        </div>

        {/* FATURAMENTO */}

        <div style={cardStyle}>

          <h2>
            💰 Faturamento
          </h2>

          <p style={numberStyle}>
            R$ {revenue}
          </p>

        </div>

        {/* MENTORIAS */}

        <div style={cardStyle}>

          <h2>
            🌟 Mentorias
          </h2>

          <p style={numberStyle}>
            {mentorias}
          </p>

        </div>

{/* PROGRESSO */}

<div style={cardStyle}>

  <h2>
    📈 Progresso dos alunos
  </h2>

  <p style={numberStyle}>
    78%
  </p>

</div>

      </div>

    </div>

  );

}

const cardStyle = {

  background:"#fff",

  padding:"40px",

  borderRadius:"24px",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.08)"

};

const numberStyle = {

  fontSize:"48px",

  fontWeight:"bold",

  marginTop:"20px",

  color:"#7A4A3A"

};