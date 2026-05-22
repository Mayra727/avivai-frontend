import { useState, useEffect } from "react";
import "./CreateCourse.css";
import { uploadFile } from "../services/uploadFile";

import { useAuth } from "../context/AuthContext";
import { API_URL } from "../services/api";
import { uploadPdf }
from "../services/uploadPdf";


import {
  useNavigate,
  useParams
} from "react-router-dom";

/* =========================
   TYPES
========================= */

type Lesson = {
  title: string;
  type: "video" | "pdf" | "image" | "text";
  content: string;
  cover: string;
};

type Module = {
  title: string;
  lessons: Lesson[];
};

/* =========================
   COMPONENT
========================= */

export default function CreateCourse() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");

  const [type, setType] =
  useState("curso");

  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  if (!id) return;

  async function loadCourse() {

    try {

      const response = await fetch(
        `${API_URL}/courses/${id}`
      );

      const data = await response.json();

      setCourseName(data.title || "");

      setPrice(
        data.price?.toString() || ""
      );

      setModules(
  data.modules.map((m: any) => ({
    title: m.title || "",

    lessons: m.lessons.map((l: any) => ({
      title: l.title || "",
      type: l.type || "video",
      content: l.content || "",
      cover: l.cover || ""
    }))
  }))
);

    } catch (error) {

      console.log(error);
    }
  }

  loadCourse();

}, [id]);

  /* =========================
     MODULES
  ========================= */

  function addModule() {
    setModules(prev => [...prev, { title: "", lessons: [] }]);
  }

  function removeModule(index: number) {
    setModules(prev => prev.filter((_, i) => i !== index));
  }

  function updateModuleTitle(index: number, value: string) {
    setModules(prev =>
      prev.map((m, i) =>
        i === index ? { ...m, title: value } : m
      )
    );
  }

  /* =========================
     LESSONS (100% IMUTÁVEL)
  ========================= */

  function addLesson(moduleIndex: number) {
    setModules(prev =>
      prev.map((module, i) =>
        i === moduleIndex
          ? {
              ...module,
              lessons: [
                ...module.lessons,
                {
                  title: "",
                  type: "video",
                  content: "",
                  cover: ""
                }
              ]
            }
          : module
      )
    );
  }

  function removeLesson(moduleIndex: number, lessonIndex: number) {
    setModules(prev =>
      prev.map((module, i) =>
        i === moduleIndex
          ? {
              ...module,
              lessons: module.lessons.filter((_, l) => l !== lessonIndex)
            }
          : module
      )
    );
  }

  function updateLesson(
    moduleIndex: number,
    lessonIndex: number,
    field: keyof Lesson,
    value: string
  ) {
    setModules(prev =>
      prev.map((module, i) =>
        i === moduleIndex
          ? {
              ...module,
              lessons: module.lessons.map((lesson, l) =>
                l === lessonIndex
                  ? {
                      ...lesson,
                      [field]: typeof value === "string"
  ? value.trim()
  : value
                    }
                  : lesson
              )
            }
          : module
      )
    );
  }

  /* =========================
     SAVE
  ========================= */

  async function handleSave() {

  console.log("STATE:", modules);

  if (!courseName || modules.length === 0) {
    alert("Preencha todos os campos");
    return;
  }

  if (!user) {
    alert("Usuário não logado");
    return;
  }

  try {

    setLoading(true);

const fixedModules = modules.map((m) => ({
  title: m.title || "",

  lessons: m.lessons.map((l: any) => ({
    title: l.title || "",
    type: l.type || "video",
    content: l.content || "",
    cover: l.cover || ""
  }))
}));

    const course = {
      title: courseName,
      price: price ? Number(price) : 0,
      modules: fixedModules,
      creatorId: user.id
    };

    // 🔥 DEBUG FINAL
    console.log("🚀 COURSE:", course);

    console.log(
      "🚀 TYPE:",
      typeof course.modules[0].lessons[0]
    );

    console.log(
      "🚀 LESSON:",
      course.modules[0].lessons[0]
    );

    const response = await fetch(

  id
    ? `https://avivai-backend-production.up.railway.app/courses/${id}`
    : `https://avivai-backend-production.up.railway.app/courses`,

  {
    method: id ? "PUT" : "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(course)
  }
);

    const data = await response.json();

    if (!response.ok) {

      console.log("❌ BACKEND:", data);

      throw new Error("Erro ao criar curso");
    }

    console.log("✅ SUCESSO:", data);

    alert(
  id
    ? "Curso atualizado com sucesso!"
    : "Curso criado com sucesso!"
);

    navigate("/meus-cursos");

  } catch (error) {

    console.error(error);

   console.log(error);
alert("Erro ao salvar curso");

  } finally {

    setLoading(false);
  }
}

  /* =========================
   UI
========================= */

return (
  <div className="create-course">

    <h1>
      {id ? "Editar Curso" : "Criar Curso"}
    </h1>

    <input
      placeholder="Nome do curso"
      value={courseName}
      onChange={(e) => setCourseName(e.target.value)}
    />

    <input
      placeholder="Preço (ex: 97.00)"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

<select
  value={type}
  onChange={(e)=>
    setType(e.target.value)
  }
>

  <option value="curso">
    Curso
  </option>

  <option value="ebook">
    Ebook
  </option>

  <option value="livro">
    Livro
  </option>

  <option value="mentoria">
    Mentoria
  </option>

</select>

    {modules.map((module, mIndex) => (
      <div key={mIndex} className="module">

<div className="module-header">

  <div className="module-title">

    <h2>
      Módulo {mIndex + 1}
    </h2>

    <input
      placeholder="Nome do módulo"
      value={module.title}
      onChange={(e) =>
        updateModuleTitle(
          mIndex,
          e.target.value
        )
      }
    />

  </div>

<div className="module-actions">

  <button
    className="add-lesson"
    onClick={() =>
      addLesson(mIndex)
    }
  >
    + Adicionar aula
  </button>

  <button
    className="remove-module"
    onClick={() =>
      removeModule(mIndex)
    }
  >
    ❌ Excluir módulo
  </button>

</div>

</div>

{module.lessons.map((lesson, lIndex) => (

  <div
    key={lIndex}
    className="lesson"
  >

    {/* NOME DA AULA */}

    <input
      placeholder="Nome da aula"
      value={lesson.title}
      onChange={(e) =>
        updateLesson(
          mIndex,
          lIndex,
          "title",
          e.target.value
        )
      }
    />

    {/* TIPO */}

    <select
      value={lesson.type}
      onChange={(e) =>
        updateLesson(
          mIndex,
          lIndex,
          "type",
          e.target.value as Lesson["type"]
        )
      }
    >
              <option value="video">
                🎥 Vídeo
              </option>

              <option value="pdf">
                📄 PDF
              </option>

              <option value="image">
                🖼️ Imagem
              </option>

              <option value="text">
                📝 Texto
              </option>
            </select>

            {/* TEXTO */}

            {lesson.type === "text" && (
              <textarea
                placeholder="Conteúdo"
                value={lesson.content}
                onChange={(e) =>
                  updateLesson(
                    mIndex,
                    lIndex,
                    "content",
                    e.target.value
                  )
                }
              />
            )}

            {/* UPLOAD */}

            {lesson.type !== "text" && (
              <>
                <input
                  type="file"
                  onChange={async (e) => {

                    const file =
                      e.target.files?.[0];

                    if (!file) return;

                    let url = null;

if (lesson.type === "pdf") {

  url = await uploadPdf(file);

} else {

  url = await uploadFile(file);
}

                    if (!url) {

                      alert("Erro no upload");

                      return;
                    }

                    updateLesson(
                      mIndex,
                      lIndex,
                      "content",
                      url
                    );
                  }}
                />

<label>
🖼️ Capa da aula
</label>

<input
  type="file"

  accept="image/*"

  onChange={async (e) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    const coverUrl =
      await uploadFile(file);

    if (!coverUrl) {

      alert(
        "Erro ao enviar capa"
      );

      return;
    }

    updateLesson(
      mIndex,
      lIndex,
      "cover",
      coverUrl
    );

  }}
/>

{
 lesson.cover && (

<div
style={{
fontSize:"12px",
marginTop:"5px",
color:"#7A4A3A"
}}
>

✅ Capa enviada

</div>

)
}

                {/* ARQUIVO EXISTENTE */}

                {lesson.content && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                      color: "#666",
                      wordBreak: "break-all"
                    }}
                  >
                    ✅ Arquivo enviado
                  </div>
                )}

              </>
            )}

            <button
              onClick={() =>
                removeLesson(
                  mIndex,
                  lIndex
                )
              }
            >
              ❌ Excluir aula
            </button>

          </div>
        ))}

        <button
          onClick={() =>
            addLesson(mIndex)
          }
        >
          + Adicionar aula
        </button>

      </div>
    ))}

    <button onClick={addModule}>
      + Adicionar módulo
    </button>

    <button
      onClick={handleSave}
      disabled={loading}
    >
      {loading
        ? "Salvando..."
        : "💾 Salvar curso"}
    </button>

  </div>
);
}