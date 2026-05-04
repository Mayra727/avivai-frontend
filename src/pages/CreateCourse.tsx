import { useState } from "react";
import "./CreateCourse.css";
import { uploadFile } from "../services/cloudinary";
import { uploadPdf } from "../services/uploadPdf";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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

  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);

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

  if (!courseName || !price || modules.length === 0) {
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

      lessons: m.lessons.map((l: any) => {

        // 💣 se vier string
        if (typeof l === "string") {

          try {

            const parsed = JSON.parse(l);

            if (Array.isArray(parsed)) {
              return parsed[0];
            }

            return parsed;

          } catch {

            return null;
          }
        }

        return {
          title: l.title || "",
          type: l.type || "video",
          content: l.content || "",
          cover: l.cover || ""
        };

      }).filter(Boolean)
    }));

    const course = {
      title: courseName,
      price: Number(price),
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
      "https://avivai-backend-production.up.railway.app/courses",
      {
        method: "POST",
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

    alert("Curso criado com sucesso!");

    navigate("/meus-cursos");

  } catch (error) {

    console.error(error);

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

      <h1>Criar Curso</h1>

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

      {modules.map((module, mIndex) => (
        <div key={mIndex} className="module">

          <h2>Módulo {mIndex + 1}</h2>

          <input
            placeholder="Nome do módulo"
            value={module.title}
            onChange={(e) => updateModuleTitle(mIndex, e.target.value)}
          />

          <button onClick={() => removeModule(mIndex)}>
            ❌ Excluir módulo
          </button>

          {module.lessons.map((lesson, lIndex) => (
            <div key={lIndex} className="lesson">

              <input
                placeholder="Nome da aula"
                value={lesson.title}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "title", e.target.value)
                }
              />

              <select
                value={lesson.type}
                onChange={(e) =>
                  updateLesson(mIndex, lIndex, "type", e.target.value)
                }
              >
                <option value="video">🎥 Vídeo</option>
                <option value="pdf">📄 PDF</option>
                <option value="image">🖼️ Imagem</option>
                <option value="text">📝 Texto</option>
              </select>

              {lesson.type === "text" && (
                <textarea
                  placeholder="Conteúdo"
                  value={lesson.content}
                  onChange={(e) =>
                    updateLesson(mIndex, lIndex, "content", e.target.value)
                  }
                />
              )}

              {lesson.type !== "text" && (
                <input
                  type="file"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
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

                    updateLesson(mIndex, lIndex, "content", url);
                  }}
                />
              )}

              <button onClick={() => removeLesson(mIndex, lIndex)}>
                ❌ Excluir aula
              </button>

            </div>
          ))}

          <button onClick={() => addLesson(mIndex)}>
            + Adicionar aula
          </button>

        </div>
      ))}

      <button onClick={addModule}>
        + Adicionar módulo
      </button>

      <button onClick={handleSave} disabled={loading}>
        {loading ? "Salvando..." : "💾 Salvar curso"}
      </button>

    </div>
  );
}
