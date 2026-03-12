import { useState, useEffect } from "react";
import { API_URL } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function ProducerDashboard() {

  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [courses, setCourses] = useState<any[]>([]);

  async function loadCourses() {

    try {

      const response = await fetch(`${API_URL}/courses`);
      const data = await response.json();

      const myCourses = data.filter(
        (course: any) => course.creatorId === user?.id
      );

      setCourses(myCourses);

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => {

    if (user) {
      loadCourses();
    }

  }, [user]);

  async function createCourse() {

    try {

      const response = await fetch(`${API_URL}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          price: Number(price),
          creatorId: user?.id
        })
      });

      const data = await response.json();

      if (response.ok) {

        alert("Curso criado com sucesso!");

        setTitle("");
        setDescription("");
        setPrice("");

        loadCourses(); // atualiza lista

      } else {

        alert(data.error);

      }

    } catch (error) {

      console.log(error);
      alert("Erro ao criar curso");

    }

  }

  return (
    <div style={{ padding: "60px" }}>

      <h1>Painel do Produtor</h1>

      {/* CRIAR CURSO */}

      <h2>Criar Novo Curso</h2>

      <input
        placeholder="Título do curso"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Preço"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={createCourse}>
        Criar Curso
      </button>

      {/* LISTA DE CURSOS */}

      <hr style={{ margin: "40px 0" }} />

      <h2>Meus Cursos</h2>

      {courses.length === 0 && (
        <p>Você ainda não criou cursos.</p>
      )}

      {courses.map((course) => (

        <div
          key={course._id}
          style={{
            padding: "20px",
            background: "#fff",
            marginTop: "20px",
            borderRadius: "10px"
          }}
        >

          <h3>{course.title}</h3>

          <p>{course.description}</p>

          <p><strong>R$ {course.price}</strong></p>

        </div>

      ))}

    </div>
  );
}