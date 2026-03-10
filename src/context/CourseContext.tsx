import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  publicado: boolean;
}

interface CourseContextType {
  cursos: Curso[];
  adicionarCurso: (curso: Curso) => void;
  publicarCurso: (id: number) => void;
}

const CourseContext = createContext<CourseContextType>({} as CourseContextType);

export function CourseProvider({ children }: { children: ReactNode }) {

  const [cursos, setCursos] = useState<Curso[]>([]);

  function adicionarCurso(curso: Curso) {
    setCursos([...cursos, curso]);
  }

  function publicarCurso(id: number) {
    setCursos(
      cursos.map((curso) =>
        curso.id === id ? { ...curso, publicado: true } : curso
      )
    );
  }

  return (
    <CourseContext.Provider value={{ cursos, adicionarCurso, publicarCurso }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourses() {
  return useContext(CourseContext);
}