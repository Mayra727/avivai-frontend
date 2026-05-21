import "./CoursePlayer.css";
import {
  useEffect,
  useState,
  useRef
} from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import { API_URL } from "../services/api";

export default function CoursePlayer() {

  const { id } = useParams();
  const navigate = useNavigate();

  const user =
  JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  console.log(
  "USER:",
  user
);

console.log(
  "ROLE:",
  user?.role
);

const courseId = id;

  const [course, setCourse] = useState<any>(null);

  const [currentLesson, setCurrentLesson] = useState<any>(null);
  
const [showSidebar, setShowSidebar] =
  useState(false);

  const videoRef =
  useRef<HTMLVideoElement>(null);

  const pdfRef =
  useRef<HTMLIFrameElement>(null);

  const [progress, setProgress] =
  useState<string[]>([]);

const totalLessons =
  course?.modules?.flatMap(
    (m: any) => m.lessons
  ).length || 0;

const progressPercent =
  totalLessons > 0
    ? Math.round(
        (progress.length /
          totalLessons) * 100
      )
    : 0;

  function isModuleUnlocked(
  moduleIndex: number
) {

  // 🔓 primeiro módulo sempre liberado

  if (moduleIndex === 0) {
    return true;
  }

  const previousModule =
    course.modules[moduleIndex - 1];

  // 🔥 verifica se TODAS aulas foram concluídas

  return previousModule.lessons.every(
    (lesson: any) =>

      progress.includes(
        lesson.title
      )
  );
}

async function completeLesson(
  lessonId: string
) {

  try {

    await fetch(
      `${API_URL}/progress`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          userId: user.id,

          courseId,

          lessonId,

          completed: true
        })
      }
    );

    // 🔥 salva última aula vista

    localStorage.setItem(
      `lastLesson-${courseId}`,
      currentLesson.title
    );

    setProgress((prev) => [
      ...prev,
      lessonId
    ]);

  } catch (error) {

    console.log(error);
  }
}

  // =========================
  // LOAD COURSE
  // =========================

  
const [hasAccess, setHasAccess] =
  useState(false);

const [
  accessChecked,
  setAccessChecked
] = useState(false);

  useEffect(() => {

    if (!id) return;

    async function loadCourse() {

      try {


        if(!user){

  navigate("/login");

  return;

}

        if(user){



  const accessResponse =
    await fetch(

`${API_URL}/check-access/${user.id}/${id}`

    );

  const accessData =
    await accessResponse.json();

  setHasAccess(
    accessData.hasAccess
  );

setAccessChecked(true);

}

        const response = await fetch(
          `${API_URL}/courses/${id}`
        );

        const data = await response.json();

        console.log("🔥 COURSE:", data);

        setCourse(data);

        // 🔥 PRIMEIRA AULA AUTOMÁTICA
        if (
          data?.modules &&
          data.modules.length > 0 &&
          data.modules[0]?.lessons &&
          data.modules[0].lessons.length > 0
        ) {

          const lastLesson =
  localStorage.getItem(
    `lastLesson-${id}`
  );

const allLessons =
  data.modules.flatMap(
    (m:any)=>m.lessons
  );

const savedLesson =
  allLessons.find(
    (l:any)=>
      l.title === lastLesson
  );

if(savedLesson){

  setCurrentLesson(
    savedLesson
  );

}else{

  setCurrentLesson(
    data.modules[0].lessons[0]
  );

}
}

      } catch (error) {

        console.log("❌ ERRO:", error);
      }
    }

    loadCourse();

  }, [id]);

useEffect(() => {

  async function loadProgress() {

    if (!user || !courseId) return;

    try {

      const response = await fetch(
        `https://avivai-backend-production.up.railway.app/progress/${user.id}/${courseId}`
      );

      const data = await response.json();

      const completedLessons =
        data.map(
          (item: any) => item.lessonId
        );

      setProgress(completedLessons);

    } catch (error) {

      console.log(error);
    }
  }

  loadProgress();

}, [user, courseId]);

useEffect(()=>{

  async function loadVideoProgress(){

    if(
      !user ||
      !course ||
      !currentLesson
    ) return;

    try{

      const response =
        await fetch(

`${API_URL}/watch-progress/${user.id}/${course._id}/${currentLesson.title}`

        );

      const data =
        await response.json();

      if(videoRef.current){

        videoRef.current.currentTime =
          data.videoTime || 0;

      }

    }catch(error){

      console.log(error);

    }

  }

  loadVideoProgress();

},[
  currentLesson,
  user,
  course
]);

useEffect(()=>{

  async function savePdfProgress(){

    if(
      !user ||
      !course ||
      !currentLesson ||
      currentLesson.type !== "pdf"
    ) return;

    const interval =
      setInterval(async()=>{

        try{

          const scrollPosition =
            pdfRef.current?.contentWindow
            ?.scrollY || 0;

          await fetch(

`${API_URL}/watch-progress`,

            {

              method:"POST",

              headers:{
                "Content-Type":
                "application/json"
              },

              body:JSON.stringify({

                userId:user.id,

                courseId:course._id,

                lessonId:
                currentLesson.title,

                videoTime:
                scrollPosition

              })

            }

          );

        }catch(error){

          console.log(error);

        }

      },3000);

    return ()=>clearInterval(interval);

  }

  savePdfProgress();

},[
  currentLesson,
  user,
  course
]);

useEffect(()=>{

  async function loadPdfProgress(){

    if(
      !user ||
      !course ||
      !currentLesson ||
      currentLesson.type !== "pdf"
    ) return;

    try{

      const response =
        await fetch(

`${API_URL}/watch-progress/${user.id}/${course._id}/${currentLesson.title}`

        );

      const data =
        await response.json();

      setTimeout(()=>{

        pdfRef.current?.contentWindow
        ?.scrollTo({

          top:data.videoTime || 0,

          behavior:"smooth"

        });

      },1500);

    }catch(error){

      console.log(error);

    }

  }

  loadPdfProgress();

},[
  currentLesson,
  user,
  course
]);

  // =========================
  // LOADING
  // =========================

if(!accessChecked){

  return(

    <div
      style={{
        minHeight:"100vh",
        background:"#141414",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      Verificando acesso...

    </div>

  );

}

if(
  !hasAccess &&
  user?.role !== "produtor"
){

  return(

    <div
      style={{
        minHeight:"100vh",
        background:"#141414",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        padding:"40px",
        textAlign:"center"
      }}
    >

      <h1>
        🔒 Conteúdo bloqueado
      </h1>

      <p
        style={{
          marginTop:"15px",
          maxWidth:"500px",
          lineHeight:"1.6"
        }}
      >

        Você precisa adquirir este
        conteúdo para liberar acesso.

      </p>

<button

  onClick={()=>{

    window.location.href =
"https://checkout.infinitepay.io/vanessa-nonato-s38/YSZGnPk66z";

  }}

  style={{
    marginTop:"25px",
    padding:"14px 28px",
    border:"none",
    borderRadius:"10px",
    background:"#7A4A3A",
    color:"#fff",
    cursor:"pointer",
    fontSize:"16px"
  }}

>

  Comprar acesso

</button>

    </div>

  );

}

if (!course) {

  return (

    <div
      style={{
        padding: "40px",
        color: "white",
        background: "#141414",
        minHeight: "100vh"
      }}
    >

      Carregando curso...

    </div>

  );

}

return (

  <div className="netflix-player">

<button
  className="mobile-menu-btn"

  onClick={() =>
    setShowSidebar(
      !showSidebar
    )
  }
>
 ☰ Módulos
</button>

{/* SIDEBAR */}

<div
  className={`netflix-sidebar ${
    showSidebar ? "open" : ""
  }`}
>

  <h2 className="course-title">
    {course.title}
  </h2>

  {course.modules?.map(
    (
      module: any,
      moduleIndex: number
    ) => (

      <div
        key={moduleIndex}
        className="module-block"
      >

        <h3>
          {module.title}
        </h3>

        {
          !isModuleUnlocked(
            moduleIndex
          ) && (

            <div className="locked-module">

              🔒 Módulo bloqueado

            </div>

          )
        }

        {
          isModuleUnlocked(
            moduleIndex
          ) &&

          module.lessons?.map(
            (
              lesson: any,
              lessonIndex: number
            ) => (

              <div
                key={lessonIndex}

                onClick={() => {

                  setCurrentLesson(
                    lesson
                  );

                  setShowSidebar(
                    false
                  );

                }}

                className={`lesson-item ${
                  currentLesson ===
                  lesson
                    ? "active"
                    : ""
                }`}
              >

                <div className="lesson-card">

                  {lesson.cover && (

                    <img
                      src={lesson.cover}
                      className="lesson-thumb"
                    />

                  )}

                  <div>

                    <p
                      style={{
                        margin: 0
                      }}
                    >
                      {lesson.title}
                    </p>

                    {
                      progress.includes(
                        lesson.title
                      ) && (

                        <span>
                          ✅
                        </span>

                      )
                    }

                  </div>

                </div>

              </div>

            )
          )

        }

      </div>

    )
  )}

</div>

      {/* PLAYER */}

      <div className="netflix-content">

        {currentLesson ? (

          <>

            <h1>{currentLesson.title}</h1>

<div
  style={{
    marginTop: "10px",
    marginBottom: "30px",
    width: "420px",
    padding: "15px",
    background: "#f5f1ee",
    borderRadius: "14px",

    display: "flex",
    flexDirection: "column",

    alignItems: "flex-start"
  }}
>

<p
  style={{
    color: "#7A4A3A",
    fontSize: "18px",
    fontWeight: "700",
    margin: "0 0 12px 0"
  }}
>
    Progresso: {progressPercent}%
  </p>

  <div
    style={{
      width: "100%",
      height: "18px",
      background: "#ddd",
      borderRadius: "30px",
      overflow: "hidden"
    }}
  >

    <div
      style={{
        width: `${progressPercent}%`,
        height: "100%",
        background: "#7A4A3A",
        borderRadius: "30px",
        transition: "all .4s ease"
      }}
    />

  </div>

</div>


            {/* VIDEO */}

            {currentLesson.type === "video" && (

              <video
  ref={videoRef}
  key={currentLesson.content}
  controls
  autoPlay
  className="netflix-video"
>

                <source
                  src={currentLesson.content}
                  type="video/mp4"
                />

              </video>

            )}

            {/* PDF */}

            {currentLesson.type === "pdf" && (

              <iframe
  ref={pdfRef}
  src={currentLesson.content}
  className="pdf-content"
/>

            )}

            {/* IMAGE */}

            {currentLesson.type === "image" && (

              <img
                src={currentLesson.content}
                className="image-content"
              />

            )}

            {/* TEXT */}

            {currentLesson.type === "text" && (

              <div className="text-content">

                {currentLesson.content}

              </div>

            )}

<button
  onClick={() =>
    completeLesson(
  currentLesson.title
)
  }

    style={{
    marginTop: "20px",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "#7A4A3A",
    color: "white",
    cursor: "pointer"
  }}
>
  ✅ Concluir aula
</button>


          </>

        ) : (

          <p style={{ color: "white" }}>
            Nenhuma aula encontrada
          </p>

        )}

      </div>

    </div>
  );
}