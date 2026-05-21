import "./Producer.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function ProducerDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

const [courses, setCourses] =
useState([]);

const [file, setFile] =
useState<File | null>(null);

const [lessonTitle, setLessonTitle] =
useState("");

useEffect(() => {

  async function loadCourses(){

    try{

      const res =
      await axios.get(

        `https://api.avivaioficial.com.br/producer-courses/${user._id}`

      );

      setCourses(
        res.data
      );

    }catch(error){

      console.log(error);

    }

  }

  if(user?._id){

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

          <button>
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

          <button>
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

await axios.post(

  "https://api.avivaioficial.com.br/courses",

  {

    title:"Curso AVIVAI",

    creatorId:user._id,

    modules:[

      {

        title:"Módulo 1",

        lessons:[

          {

            title:lessonTitle,

            type:"video",

            content:uploadedUrl

          }

        ]

      }

    ]

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

          <button>
            Ver métricas
          </button>

        </div>

      </section>

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

</section>

    </div>

  );

}