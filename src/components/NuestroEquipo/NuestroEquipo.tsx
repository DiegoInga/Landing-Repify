"use client";

import { useState } from "react";
import Image from "next/image";
import { BackgroundRadialRight } from "../BackgroundRadialRight";

// Tipos para el equipo y las habilidades
type Skill = {
  name: string;
  logo: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  skills: Skill[];
};

// Datos del equipo
const team: TeamMember[] = [
  {
    name: "Deyvi Sanchez",
    role: "Desarrollador Frontend",
    image: "/assets/deyvi.webp",
    skills: [
      { name: "React", logo: "/assets/react.svg" },
      { name: "TypeScript", logo: "/assets/ts.svg" },
      { name: "Next.js", logo: "/assets/next.svg" },
      { name: "Docker", logo: "/assets/docker.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "HTML", logo: "/assets/html.svg" },
      { name: "JavaScript", logo: "/assets/js.svg" },
      { name: "Python", logo: "/assets/python.svg" },
      { name: "Vite.js", logo: "/assets/vite.svg" },
      { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
    ],
  },
  {
    name: "Max Ttito",
    role: "Desarrollador Backend",
    image: "/assets/tiooo.webp",
    skills: [
      { name: "Amazon RDS", logo: "/assets/amazondb.svg" },
      { name: "AWS", logo: "/assets/amazonws.svg" },
      { name: "Django", logo: "/assets/django.svg" },
      { name: "Docker", logo: "/assets/docker.svg" },
      { name: "FastAPI", logo: "/assets/fastapi.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "JWT", logo: "/assets/jwt.svg" },
      { name: "MySQL", logo: "/assets/mysql.svg" },
      { name: "Postgre SQL", logo: "/assets/postgre.svg" },
      { name: "Python", logo: "/assets/python.svg" },
    ],
  },
  {
    name: "Angel Choquehuanca",
    role: "Desarrollador Backend",
    image: "/assets/angel2.png",
    skills: [
      { name: "PHP", logo: "/assets/php.svg" },
      { name: "Django", logo: "/assets/django.svg" },
      { name: "FastAPI", logo: "/assets/fastapi.svg" },
      { name: "JWT", logo: "/assets/jwt.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "MySQL", logo: "/assets/mysql.svg" },
      { name: "Postgre SQL", logo: "/assets/postgre.svg" },
      { name: "Python", logo: "/assets/python.svg" },
    ],
  },
  {
    name: "Diego Inga",
    role: "Desarrollador Frontend",
    image: "/assets/foto.jpg",
    skills: [
      { name: "Figma", logo: "/assets/figma.svg" },
      { name: "Next.js", logo: "/assets/next.svg" },
      { name: "JavaScript", logo: "/assets/js.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "HTML", logo: "/assets/html.svg" },
      { name: "CSS", logo: "/assets/css.svg" },
      { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
      { name: "React", logo: "/assets/react.svg" },
    ],
  },
  {
    name: "Edward Pittman",
    role: "Diseño UX/UI",
    image: "/assets/edward.webp",
    skills: [
      { name: "Figma", logo: "/assets/figma.svg" },
      { name: "HTML", logo: "/assets/html.svg" },
      { name: "CSS", logo: "/assets/css.svg" },
      { name: "JavaScript", logo: "/assets/js.svg" },
    ],
  },
  {
    name: "Jesus Pezo",
    role: "Tester",
    image: "/assets/jesuss.jpg",
    skills: [],
  },
];

// Estilos CSS para las animaciones y transformaciones
export function NuestroEquipo() {
  const [hoveredMemberIndex, setHoveredMemberIndex] = useState<number | null>(null); // Estado para el miembro hover

  const handleMouseEnter = (index: number) => {
    setHoveredMemberIndex(index); // Establecer el miembro hover
  };

  const handleMouseLeave = () => {
    setHoveredMemberIndex(null); // Restablecer el miembro hover
  };

  return (
    <div className="p-4 py-20 md:py-55 relative">
      <BackgroundRadialRight />
      <div id="nuestroequipo" className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center text-blue-600 degradedBlue bg-blueLight">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10 justify-items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] group flex items-center justify-center"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Imagen y nombre del miembro */}
              <div className="relative w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ajusta el tamaño según el dispositivo
                  className="rounded-lg object-cover" // Asegura que la imagen ocupe todo el espacio sin distorsionarse
                />
              </div>
              <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-70 text-white p-3 rounded-b-lg">
                <h3 className="text-sm font-bold text-center">{member.name}</h3>
                <p className="text-center text-gray-400 text-xs">{member.role}</p>
              </div>

              {/* Skills del miembro, visible solo si es el miembro hover */}
              {hoveredMemberIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 rounded-lg flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out p-2">
                  <h4 className="text-xs font-semibold text-center text-white mb-2">Skills</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center justify-center text-white bg-gray-700 p-1 rounded-md transition-transform duration-300"
                      >
                        <Image src={skill.logo} alt={skill.name} width={18} height={18} className="mb-0.5" />
                        <span className="text-[10px]">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NuestroEquipo;











