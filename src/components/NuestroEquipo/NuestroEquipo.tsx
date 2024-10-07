"use client";

import { useState } from "react";
import Image from "next/image";

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

// Datos del equipo con una imagen de prueba "/assets/foto.jpg"
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
    image: "/assets/tito1.webp",
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
      { name: "TypeScript", logo: "/assets/ts.svg" },
      { name: "Figma", logo: "/assets/figma.svg" },
      { name: "JavaScript", logo: "/assets/js.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "HTML", logo: "/assets/html.svg" },
      { name: "CSS", logo: "/assets/css.svg" },
      { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
    ],
  },
  {
    name: "Edward Pittman",
    role: "Diseño UX/UI",
    image: "/assets/edward2.png",
    skills: [
      { name: "Figma", logo: "/assets/figma.svg" },
    ],
  },
  {
    name: "Jesus Pezo",
    role: "Tester",
    image: "/assets/jesus2.png",
    skills: [
      
    ],
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
      <div id="nuestroequipo" className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center text-blue-600 degradedBlue bg-blueLight">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[300px] group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Imagen y nombre del miembro */}
              <Image
                src={member.image}
                alt={member.name}
                width={400}  // Ajustamos el ancho de la imagen
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
               <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-70 text-white p-3 rounded-b-lg">
                    <h3 className="text-sm font-bold text-center">{member.name}</h3>
                    <p className="text-center text-gray-400 text-xs">{member.role}</p>
                </div>


              {/* Skills del miembro, visible solo si es el miembro hover */}
              {hoveredMemberIndex === index && (
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 rounded-lg flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out p-1">
    <h4 className="text-xs font-semibold text-center text-white mb-1">Skills</h4>
    <div className="grid grid-cols-2 gap-1">
      {member.skills.map((skill, skillIndex) => (
        <div
          key={skillIndex}
          className="flex flex-col items-center justify-center text-white bg-gray-700 p-1 rounded-md transition-transform duration-300"
        >
          <Image src={skill.logo} alt={skill.name} width={12} height={12} className="mb-0.5" /> {/* Reducido el tamaño del logo */}
          <span className="text-[10px]">{skill.name}</span> {/* Tamaño del texto aún más pequeño */}
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







