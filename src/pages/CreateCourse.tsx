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

  extraPdf?: string;
};

type Module = {
  title: string;

  pdf?: string;

  video?: string;

  extraPdf?: string;

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

  const [promoPrice, setPromoPrice] =
useState("");

  const [type, setType] =
  useState("curso");

  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);

  const [initialLessons, setInitialLessons] =
useState<Lesson[]>([]);

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

      setPromoPrice(
  data.promoPrice?.toString() || ""
);

setInitialLessons(
  data.initialLessons || []
);

setModules(

  data.modules.map((m: any) => ({

    title: m.title || "",

    pdf: m.pdf || "",
video: m.video || "",
extraPdf: m.extraPdf || "",

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

  setModules(prev => [

    ...prev,

    {
      title: "",
      pdf: "",
      video: "",
      extraPdf: "",
      lessons: []
    }

  ]);

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

if (
  !courseName ||
  (modules.length === 0 &&
   initialLessons.length === 0)
) {
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

  pdf: m.pdf || "",
  video: m.video || "",
extraPdf: m.extraPdf || "",

  lessons: m.lessons.map((l: any) => ({
    title: l.title || "",
    type: l.type || "video",
    content: l.content || "",
    cover: l.cover || ""
  }))

}));

const course = {

  title: courseName,

  price: price
  ? Number(
      price.replace(",", ".")
    )
  : 0,

  promoPrice: promoPrice
  ? Number(
      promoPrice.replace(",", ".")
    )
  : 0,

  type,

  initialLessons,

  modules: fixedModules,

  creatorId: user.id,

};

    // 🔥 DEBUG FINAL
    console.log("🚀 COURSE:", course);

    if (
  course.modules.length > 0 &&
  course.modules[0].lessons.length > 0
) {

  console.log(
    "🚀 TYPE:",
    typeof course.modules[0].lessons[0]
  );

  console.log(
    "🚀 LESSON:",
    course.modules[0].lessons[0]
  );

}

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

<input
  placeholder="Preço promocional (ex: 47.00)"
  value={promoPrice}
  onChange={(e)=>
    setPromoPrice(e.target.value)
  }
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

<div className="module">

  <h2>
    Conteúdos iniciais
  </h2>

<button
  type="button"
  onClick={() =>

    setInitialLessons(prev => [

      ...prev,

      {
  title: "",
  type: "video",
  content: "",
  cover: "",
  extraPdf: ""
}

    ])

  }
>

  + Adicionar conteúdo inicial

</button>

  {initialLessons.map(
    (lesson, index) => (

      <div
        key={index}
        className="lesson"
      >

       <input
  placeholder="Nome do conteúdo inicial"

  value={lesson.title}

  onChange={(e) =>

    setInitialLessons(prev =>

      prev.map((l,i) =>

        i === index

          ? {
              ...l,
              title: e.target.value
            }

          : l

      )

    )

  }
/>

<button
  type="button"
  onClick={() =>
    setInitialLessons(prev =>
      prev.filter((_, i) => i !== index)
    )
  }
  style={{
    background:"#7A4A3A",
    color:"#fff",
    border:"none",
    padding:"10px 15px",
    borderRadius:"8px",
    cursor:"pointer"
  }}
>
  ❌ Excluir conteúdo
</button>

        {/* VIDEO */}

<input
  type="file"
  accept="video/*"

  onChange={async (e) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    const url =
      await uploadFile(file);

console.log(
  "UPLOAD URL:",
  url
);

    if (!url) return;

    setInitialLessons(prev =>
      prev.map((l, i) =>
        i === index
          ? {
              ...l,
              type: "video",
              content: url
            }
          : l
      )
    );

  }}
/>

{lesson.content &&
 lesson.type === "video" && (

  <div
    style={{
      marginTop: "8px",
      fontSize: "13px",
      color: "#7A4A3A"
    }}
  >

    ✅ Vídeo enviado

    <a
      href={lesson.content}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:"block",
        marginTop:"5px",
        color:"#7A4A3A",
        fontWeight:"600"
      }}
    >

      🔗 Ver vídeo atual

    </a>

  </div>

)}



{/* PDF */}

<input
  type="file"
  accept=".pdf"

  onChange={async (e) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    const url =
      await uploadPdf(file);

    if (!url) return;

setInitialLessons(prev =>
  prev.map((l, i) =>
    i === index
      ? {
          ...l,
          extraPdf: url
        }
      : l
  )
);
  }}
/>

{lesson.content &&
 lesson.type === "pdf" && (

  <div
    style={{
      marginTop: "8px",
      fontSize: "13px",
      color: "#7A4A3A"
    }}
  >

    ✅ PDF enviado

    <a
      href={lesson.content}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:"block",
        marginTop:"5px",
        color:"#7A4A3A",
        fontWeight:"600"
      }}
    >

      🔗 Ver PDF atual

    </a>

  </div>

)}
      </div>

    )
  )}

</div>

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

<div style={{ marginTop: "15px" }}>

  <label
    style={{
      display: "block",
      marginBottom: "8px",
      color: "#7A4A3A",
      fontWeight: "600"
    }}
  >
    📄 PDF do módulo
  </label>

  <input
    type="file"
    accept=".pdf"

    onChange={async (e) => {

      const file =
        e.target.files?.[0];

      if (!file) return;

      const url =
        await uploadPdf(file);

      if (!url) {

        alert("Erro upload PDF");

        return;

      }

      setModules(prev =>
        prev.map((mod, i) =>
          i === mIndex
            ? {
                ...mod,
                pdf: url
              }
            : mod
        )
      );

    }}
  />

  {module.pdf && (

    <div
      style={{
        marginTop: "8px",
        color: "#7A4A3A",
        fontSize: "13px"
      }}
    >
      ✅ PDF enviado

<a
  href={module.pdf}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display:"block",
    marginTop:"6px",
    color:"#7A4A3A",
    fontSize:"13px",
    fontWeight:"600"
  }}
>

  🔗 Ver PDF atual

</a>

    </div>

  )}

</div>

{/* VIDEO DO MODULO */}

<div style={{ marginTop: "20px" }}>

  <label
    style={{
      display: "block",
      marginBottom: "8px",
      color: "#7A4A3A",
      fontWeight: "600"
    }}
  >
    🎥 Vídeo do módulo
  </label>

  <input
    type="file"
    accept="video/*"

    onChange={async (e) => {

      const file =
        e.target.files?.[0];

      if (!file) return;

      const url =
        await uploadFile(file);

      if (!url) return;

      setModules(prev =>
        prev.map((mod, i) =>
          i === mIndex
            ? {
                ...mod,
                video: url
              }
            : mod
        )
      );

    }}
  />

  {module.video && (

    <div
      style={{
        marginTop: "8px",
        color: "#7A4A3A",
        fontSize: "13px"
      }}
    >

      ✅ Vídeo enviado

    </div>

  )}

</div>

{/* PDF COMPLEMENTAR */}

<div style={{ marginTop: "20px" }}>

  <label
    style={{
      display: "block",
      marginBottom: "8px",
      color: "#7A4A3A",
      fontWeight: "600"
    }}
  >
    📄 PDF complementar
  </label>

  <input
    type="file"
    accept=".pdf"

    onChange={async (e) => {

      const file =
        e.target.files?.[0];

      if (!file) return;

      const url =
        await uploadPdf(file);

      if (!url) return;

      setModules(prev =>
        prev.map((mod, i) =>
          i === mIndex
            ? {
                ...mod,
                extraPdf: url
              }
            : mod
        )
      );

    }}
  />

  {module.extraPdf && (

    <div
      style={{
        marginTop: "8px",
        color: "#7A4A3A",
        fontSize: "13px"
      }}
    >

      ✅ PDF complementar enviado

    </div>

  )}

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

                    {lesson.content && (

  <a
    href={lesson.content}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display:"block",
      marginTop:"8px",
      color:"#7A4A3A",
      fontSize:"13px",
      fontWeight:"600"
    }}
  >

    🔗 Ver arquivo atual

  </a>

)}
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