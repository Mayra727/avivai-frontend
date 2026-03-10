export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  duration: string;
  lessons: number;
  image: string;
}

export const courses: Course[] = [
  {
    id: "caminho-intimidade",
    title: "O Caminho da Intimidade",
    description:
      "Uma jornada transformadora de desenvolvimento espiritual que combina intercessão, libertação e cura interior.",
    price: 297,
    instructor: "Vanessa Nonato",
    duration: "40 horas",
    lessons: 18,
    image: "/curso1.jpg",
  },
];