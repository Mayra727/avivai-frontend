import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext";

import {
  API_URL
} from "../services/api";

export default function Courses() {

  const navigate = useNavigate();

  const { user } =
    useAuth();

  const [courses, setCourses] =
    useState<any[]>([]);

  useEffect(() => {

    async function loadCourses() {

      try {

        const response =
          await fetch(
            `${API_URL}/courses`
          );

        const data =
          await response.json();

        setCourses(data);

      } catch (error) {

        console.log(error);

      }

    }

    loadCourses();

  }, []);

  return (

    <div
      style={{
        padding:"60px"
      }}
    >

      <h1>
        Cursos Disponíveis
      </h1>

      {user ? (

        <p
          style={{
            color:"green"
          }}
        >

          Você está logado como{" "}

          <strong>
            {user.name}
          </strong>

          {" "}✅

        </p>

      ) : (

        <p
          style={{
            color:"red"
          }}
        >

          Você não está logado

        </p>

      )}

      <div
        style={{
          display:"grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",

          gap:"20px",

          marginTop:"40px"
        }}
      >

        {courses.map((course:any)=>(

          <div

            key={course._id}

            style={{
              background:"#fff",

              borderRadius:"20px",

              overflow:"hidden",

              boxShadow:
                "0 5px 20px rgba(0,0,0,0.08)"
            }}

          >

            <div
              style={{
                height:"180px",
                background:"#d9cfc7"
              }}
            />

            <div
              style={{
                padding:"20px"
              }}
            >

              <h2>
                {course.title}
              </h2>

              <p>
                Curso completo Avivai
              </p>

              <h3>
                R$ {course.price}
              </h3>

              <button

                onClick={()=>
                  navigate(
                    `/curso/${course._id}`
                  )
                }

                style={{
                  width:"100%",

                  padding:"12px",

                  border:"none",

                  borderRadius:"10px",

                  background:"#7A4A3A",

                  color:"#fff",

                  cursor:"pointer"
                }}

              >

                comprar curso

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}