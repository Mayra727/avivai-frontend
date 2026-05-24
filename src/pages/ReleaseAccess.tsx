import { useEffect, useState } from "react";
import { API_URL } from "../services/api";

export default function ReleaseAccess() {

  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);

  const [selectedUser, setSelectedUser] =
    useState("");

  const [selectedCourse, setSelectedCourse] =
    useState("");

  useEffect(() => {

    loadData();

  }, []);

  async function loadData() {

    try {

      // USERS

      const usersResponse =
        await fetch(`${API_URL}/users`);

      const usersData =
        await usersResponse.json();

      setUsers(usersData);

      // COURSES

      const coursesResponse =
        await fetch(`${API_URL}/courses`);

      const coursesData =
        await coursesResponse.json();

      setCourses(coursesData);

    } catch (error) {

      console.log(error);

    }

  }

  async function handleGrantAccess() {

    if(!selectedUser || !selectedCourse){

      alert("Selecione usuário e curso");

      return;

    }

    try {

      const response = await fetch(
        `${API_URL}/grant-access`,
        {

          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({

            userId:selectedUser,

            courseId:selectedCourse

          })

        }
      );

      const data = await response.json();

      console.log(data);

      alert("Acesso liberado!");

    } catch (error) {

      console.log(error);

      alert("Erro ao liberar acesso");

    }

  }

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#F8F5F1",
        padding:"40px"
      }}
    >

      <div
        style={{
          maxWidth:"700px",
          margin:"0 auto",
          background:"#fff",
          padding:"40px",
          borderRadius:"24px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >

        <h1
          style={{
            color:"#7A4A3A",
            marginBottom:"30px"
          }}
        >

          Liberação Manual

        </h1>

        {/* USER */}

        <label>
          Usuário
        </label>

        <select
          value={selectedUser}
          onChange={(e)=>
            setSelectedUser(e.target.value)
          }
          style={{
            width:"100%",
            padding:"16px",
            marginTop:"10px",
            marginBottom:"25px",
            borderRadius:"12px",
            border:"1px solid #ddd"
          }}
        >

          <option value="">
            Selecione usuário
          </option>

          {users.map((user)=>(

            <option
              key={user._id}
              value={user._id}
            >

              {user.name} - {user.email}

            </option>

          ))}

        </select>

        {/* COURSE */}

        <label>
          Curso
        </label>

        <select
          value={selectedCourse}
          onChange={(e)=>
            setSelectedCourse(e.target.value)
          }
          style={{
            width:"100%",
            padding:"16px",
            marginTop:"10px",
            marginBottom:"30px",
            borderRadius:"12px",
            border:"1px solid #ddd"
          }}
        >

          <option value="">
            Selecione curso
          </option>

          {courses.map((course)=>(

            <option
              key={course._id}
              value={course._id}
            >

              {course.title}

            </option>

          ))}

        </select>

        <button

          onClick={handleGrantAccess}

          style={{
            width:"100%",
            padding:"18px",
            border:"none",
            borderRadius:"14px",
            background:"#7A4A3A",
            color:"#fff",
            fontSize:"16px",
            fontWeight:"600",
            cursor:"pointer"
          }}

        >

          Liberar acesso

        </button>

      </div>

    </div>

  );

}