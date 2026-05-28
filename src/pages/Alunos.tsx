import { useEffect, useState } from "react";
import axios from "axios";

export default function Alunos() {

  const [students, setStudents] =
    useState<any[]>([]);

  const [access, setAccess] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadStudents(){

      try{

        // 🔥 USERS
        const response =
          await axios.get(
            "https://api.avivaioficial.com.br/alunos-liberados"
          );

        // 🔥 ACCESS
        const accessResponse =
          await axios.get(
            "https://api.avivaioficial.com.br/access-list"
          );

        setAccess(
          accessResponse.data
        );

        // 🔥 SOMENTE ALUNOS
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

  // =========================
  // LIBERAR ACESSO
  // =========================

  async function releaseAccess(
    accessId:string
  ){

    try{

      await axios.put(

`https://api.avivaioficial.com.br/release-access/${accessId}`

      );

      alert(
        "Acesso liberado!"
      );

      window.location.reload();

    }catch(error){

      console.log(error);

      alert(
        "Erro ao liberar"
      );

    }

  }

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

        {students.map((student)=>{

          // 🔥 ACCESS DO ALUNO

          const studentAccess =
            access.find(
              (a)=>
                a.userId === student._id
            );

          return(

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
                {" "}
                {student.role}
              </p>

              <p
                style={{
                  marginTop:"10px",
                  fontWeight:"bold"
                }}
              >

                Status:
                {" "}

                {studentAccess?.status ||
                 "sem acesso"}

              </p>

              {studentAccess?.status !==
"liberado" && (

  <button

    onClick={async()=>{

      try{

        let accessId =
          studentAccess?._id;

        // 🔥 cria access se não existir

        if(!accessId){

          const created =
            await axios.post(

`https://api.avivaioficial.com.br/create-access`,

            {

              userId:
                student._id,

              courseId:
                "6a14bbaea1b0eaffc941de4d"

            }

          );

          accessId =
            created.data._id;

        }

        await releaseAccess(
          accessId
        );

      }catch(error){

        console.log(error);

        alert(
          "Erro"
        );

      }

    }}

    style={{
      marginTop:"20px",
      padding:"12px 20px",
      background:"#6E4638",
      color:"#fff",
      border:"none",
      borderRadius:"12px",
      cursor:"pointer"
    }}

  >

    Liberar acesso

  </button>

)}

            </div>

          );

        })}

      </div>

    </div>

  );

}