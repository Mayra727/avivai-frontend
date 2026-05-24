import "./Producer.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProducerDashboard() {

const navigate =
useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

const [courses, setCourses] =
useState([]);

const [file, setFile] =
useState<File | null>(null);

const [lessonTitle, setLessonTitle] =
useState("");

const [courseTitle, setCourseTitle] =
useState("");

const [creatingCourse, setCreatingCourse] =
useState(false);

const [moduleTitle, setModuleTitle] =
useState("");

const [selectedCourse, setSelectedCourse] =
useState("");

useEffect(() => {

  async function loadCourses(){

    try{

      const res =
      await axios.get(

        `https://api.avivaioficial.com.br/producer-courses/${user.id}`

      );

      setCourses(
        res.data
      );

    }catch(error){

      console.log(error);

    }

  }

 if(user?.id){

    loadCourses();

  }

}, []);


  return (

    <div className="dashboard-page">

      <section className="dashboard-hero">

        <h1>
          Painel da Produtora
        </h1>

        <p>
          Bem-vinda,
          {user?.name || "Vanessa"} ✨
        </p>

      </section>

      <section className="dashboard-grid">

        {/* ALUNOS */}

        <div className="dashboard-card">

          <h2>
            👥 Alunos
          </h2>

          <p>
            Visualize e acompanhe
            os alunos cadastrados
            na plataforma.
          </p>

          <button
  onClick={()=>
    navigate("/alunos")
  }
>
  Ver alunos
</button>

        </div>

        {/* CURSOS */}

        <div className="dashboard-card">

          <h2>
            📘 Cursos
          </h2>

          <p>
            Gerencie ebooks,
            cursos e materiais
            da AVIVAI.
          </p>

          <button
  onClick={()=>
    navigate("/criar-curso")
  }
>
  Gerenciar cursos
</button>

        </div>

        {/* UPLOAD */}

        <div className="dashboard-card">

  <h2>
    ☁ Uploads
  </h2>

  <p>
    Envie PDFs,
    vídeos e conteúdos
    da plataforma.
  </p>

<select

  value={selectedCourse}

  onChange={(e)=>
    setSelectedCourse(
      e.target.value
    )
  }

>

  <option value="">
    Selecione o curso
  </option>

  {courses.map((course:any)=>(

    <option
      key={course._id}
      value={course._id}
    >

      {course.title}

    </option>

  ))}

</select>

<input

  type="text"

  placeholder="Nome do módulo"

  value={moduleTitle}

  onChange={(e)=>
    setModuleTitle(
      e.target.value
    )
  }

/>

<input

  type="text"

  placeholder="Título da aula"

  value={lessonTitle}

  onChange={(e)=>
    setLessonTitle(
      e.target.value
    )
  }

/>

  <input
    type="file"
    onChange={(e) => {

    if(e.target.files){

  setFile(
    e.target.files[0]
  );

}  

    }}
  />
  

  <button

    onClick={async () => {

      if(!file){

        return alert(
          "Selecione um arquivo"
        );

      }

      const formData =
      new FormData();

      formData.append(
        "video",
        file
      );

      try{

        const res =
        await axios.post(

          "https://api.avivaioficial.com.br/upload-video",

          formData,

          {

            headers:{
              "Content-Type":
              "multipart/form-data"
            }

          }

        );

        const uploadedUrl =
res.data.url;

await axios.put(

`https://api.avivaioficial.com.br/courses/${selectedCourse}`,

  {

    moduleTitle,

    lesson:{

      title:lessonTitle,

      type:"video",

      content:uploadedUrl

    }

  }

);

console.log(
  uploadedUrl
);

alert(
  "Upload realizado com sucesso!"
);

      }catch(error){

        console.log(error);

        alert(
          "Erro upload"
        );

      }

    }}

  >

    Enviar material

  </button>

</div>

        {/* MÉTRICAS */}

        <div className="dashboard-card">

          <h2>
            📊 Plataforma
          </h2>

          <p>
            Acompanhe crescimento,
            acessos e evolução
            dos alunos.
          </p>

          <button
  onClick={()=>
    navigate("/metricas")
  }
>
  Ver métricas
</button>

        </div>

      </section>

<div
  style={{
    marginTop:"50px",
    marginBottom:"40px"
  }}
>

  <button

    onClick={()=>
      setCreatingCourse(
        !creatingCourse
      )
    }

    style={{

      padding:"14px 24px",

      border:"none",

      borderRadius:"12px",

      background:"#7A4A3A",

      color:"#fff",

      cursor:"pointer"

    }}

  >

    + Novo Curso

  </button>

</div>

{creatingCourse && (

  <div
    className="dashboard-card"
  >

    <h2>
      Criar novo curso
    </h2>

    <input

      type="text"

      placeholder="Nome do curso"

      value={courseTitle}

      onChange={(e)=>
        setCourseTitle(
          e.target.value
        )
      }

    />

    <button

      style={{
        marginTop:"20px"
      }}

      onClick={async()=>{

        try{

          await axios.post(

"https://api.avivaioficial.com.br/courses",

            {

              title:courseTitle,

              creatorId:user.id,

              modules:[]

            }

          );

          alert(
            "Curso criado!"
          );

          window.location.reload();

        }catch(error){

          console.log(error);

          alert(
            "Erro ao criar"
          );

        }

      }}

    >

      Criar curso

    </button>

  </div>

)}

<section
  style={{
    marginTop:"80px"
  }}
>

  <h2
    style={{
      marginBottom:"30px"
    }}
  >
    Cursos criados
  </h2>

  <div className="dashboard-grid">

    {courses.map((course:any)=>(

      <div
        key={course._id}
        className="dashboard-card"
      >

        <h2>
          {course.title}
        </h2>

        <p>
          {course.modules?.length}
          módulo(s)
        </p>

      </div>

    ))}

  </div>

{/* LIBERAÇÃO */}

<div className="dashboard-card">

  <h2>
    🔓 Liberação
  </h2>

  <p>
    Libere manualmente
    acessos para alunos
    da plataforma.
  </p>

  <button
    onClick={() =>
      navigate("/release-access")
    }
  >
    Liberar acessos
  </button>

</div>

</section>

    </div>

  );

}