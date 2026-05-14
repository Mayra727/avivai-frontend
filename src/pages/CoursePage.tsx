import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { createPayment } from "../services/payment";
import "./CoursePage.css";
import { API_URL } from "../services/api";

export default function CoursePage() {

  const { id } = useParams();

  const course = courses.find((c) => String(c.id) === id);

  if (!course) {
    return <h2 style={{ padding: "40px" }}>Curso não encontrado</h2>;
  }

  async function handleBuy() {

    try {

      console.log("Iniciando pagamento:", course);

     const payment = await createPayment(
  String(course!.id),
  course!.title,
  course!.price
);

      console.log("Pagamento criado:", payment);

      window.location.href =
        `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${payment.id}`;

    } catch (error) {

      console.error("Erro pagamento:", error);

      alert("Erro ao conectar com pagamento");

    }

  }

  return (
    <div className="course-page">
      <div className="course-container">

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            alt="Curso"
          />
        </div>

        <div className="course-card">

          <h1 className="course-title">{course.title}</h1>

          <p className="course-instructor">
            Vanessa Nonato
          </p>

          <div className="course-meta">
            ⭐ 5 • 8.742 alunos • {course.duration}
          </div>

          <div className="course-price-box">

            <span className="course-price">
              R$ {course.price},00
            </span>

          </div>

<button

onClick={async()=>{

const user=
JSON.parse(
localStorage.getItem(
"user"
)||"{}"
);

if(!user?.id){

alert(
"Faça login primeiro"
);

return;

}

try{

await fetch(

`${API_URL}/grant-access`,

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

userId:user.id,



})

}

);

alert(
"Acesso liberado"
);

window.location.reload();

}catch(error){

console.log(error);

alert(
"Erro ao liberar acesso"
);

}

}}

style={{

padding:"12px",

background:"#7A4A3A",

color:"#fff",

border:"none",

borderRadius:"10px",

width:"100%",

fontWeight:"600",

marginTop:"15px"

}}

>

🛒 Comprar curso

</button>

        </div>

      </div>
    </div>
  );
}