import { useEffect, useState } from "react";
import axios from "axios";

export default function Alunos() {

  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadStudents(){

      try{

        const response =
          await axios.get(
            "https://api.avivaioficial.com.br/users"
          );

        const alunos =
          response.data.filter(
            (user:any)=>
              user.role === "aluno"
          );

        setStudents(alunos);

      }catch(error){

        console.log(error);

      }finally{

        setLoading(false);

      }

    }

    loadStudents();

  },[]);

  return(

    <div
      style={{
        padding:"50px",
        maxWidth:"1200px",
        margin:"0 auto"
      }}
    >

      <h1
        style={{
          color:"#6E4638",
          marginBottom:"30px"
        }}
      >
        👥 Alunos cadastrados
      </h1>

      {loading && (
        <p>Carregando...</p>
      )}

      {!loading &&
       students.length === 0 && (

        <p>
          Nenhum aluno encontrado.
        </p>

      )}

      <div
        style={{
          display:"grid",
          gap:"20px"
        }}
      >

        {students.map((student)=>(

          <div
            key={student._id}

            style={{
              background:"#fff",
              padding:"25px",
              borderRadius:"20px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.06)"
            }}
          >

            <h2>
              {student.name}
            </h2>

            <p>
              {student.email}
            </p>

            <p>
              Tipo:
              {student.role}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}