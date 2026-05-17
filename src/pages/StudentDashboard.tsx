import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API_URL } from "../services/api";

export default function StudentDashboard() {

  const { user } = useAuth();

  const [courses, setCourses] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(()=>{

    async function loadCourses(){

      if(!user) return;

      try{

        const response =
          await fetch(

`${API_URL}/my-courses/${user.id}`

          );

        const data =
          await response.json();

        setCourses(data);

      }catch(error){

        console.log(error);

      }finally{

        setLoading(false);

      }

    }

    loadCourses();

  },[user]);

  return(

    <div
      style={{
        padding:"60px",
        maxWidth:"1200px",
        margin:"0 auto"
      }}
    >

      <h1
        style={{
          fontSize:"42px",
          color:"#5A3427"
        }}
      >

        📚 Meus Cursos

      </h1>

      {loading && (

        <p
          style={{
            marginTop:"20px"
          }}
        >
          Carregando...
        </p>

      )}

      {!loading &&
       courses.length === 0 && (

        <p
          style={{
            marginTop:"20px"
          }}
        >

          Você ainda não possui
          cursos liberados.

        </p>

      )}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap:"25px",
          marginTop:"40px"
        }}
      >

        {courses.map((course)=>(

          <div

            key={course._id}

            style={{
              background:"#fff",
              borderRadius:"24px",
              overflow:"hidden",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)"
            }}

          >

            <div
              style={{
                height:"180px",
                background:"#D9CEC7"
              }}
            />

            <div
              style={{
                padding:"25px"
              }}
            >

              <h2
                style={{
                  color:"#5A3427"
                }}
              >

                {course.title}

              </h2>

              <p
                style={{
                  marginTop:"10px",
                  color:"#666",
                  lineHeight:"1.6"
                }}
              >

                Continue sua jornada
                espiritual.

              </p>

              <Link
                to={`/curso/${course._id}`}
              >

                <button
                  style={{
                    marginTop:"20px",
                    width:"100%",
                    padding:"14px",
                    border:"none",
                    borderRadius:"12px",
                    background:"#7A4A3A",
                    color:"#fff",
                    cursor:"pointer",
                    fontWeight:"bold"
                  }}
                >

                  Continuar curso

                </button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}