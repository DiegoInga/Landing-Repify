"use client";

import Link from "next/link";
import { useState } from "react"; 
import Image from "next/image";
import { MotionTransition } from "../MotionTransition"; // Asegúrate de tener este componente disponible
import { Reveal } from "../Reveal";

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

// Equipo de desarrolladores y diseñadores
const team: TeamMember[] = [
  {
    name: "Deyvi Sanchez",
    role: "Desarrollador Frontend",
    image: "/assets/deyvi.jpg",
    skills: [
      { name: "React", logo: "/assets/react.svg" },
      { name: "TypeScript", logo: "/assets/ts.svg" },
      { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
      { name: "Next.js", logo: "/assets/next.svg" },
      { name: "Bootstrap", logo: "/assets/bootstrap.svg" },
      { name: "Google Cloud", logo: "/assets/cloud.svg" },
      { name: "CSS", logo: "/assets/css.svg" },
      { name: "Docker", logo: "/assets/docker.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "Github", logo: "/assets/github.svg" },
      { name: "HTML", logo: "/assets/html.svg" },
      { name: "JavaScript", logo: "/assets/js.svg" },
      { name: "Python", logo: "/assets/python.svg" },
      { name: "Vite.js", logo: "/assets/vite.svg" },
      { name: "Vercel", logo: "/assets/vercelx.svg" },
      { name: "Shadcn", logo: "/assets/shadcn.svg" },
    ],
  },
  {
    name: "Max Ttito",
    role: "Desarrollador Backend",
    image: "/assets/circular_tito.png",
    skills: [
      { name: "Amazon RDS", logo: "/assets/amazondb.svg" },
      { name: "AWS", logo: "/assets/amazonws.svg" },
      { name: "Google Cloud", logo: "/assets/cloud.svg" },
      { name: "Django", logo: "/assets/django.svg" },
      { name: "Docker", logo: "/assets/docker.svg" },
      { name: "FastAPI", logo: "/assets/fastapi.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "Github", logo: "/assets/github.svg" },
      { name: "JWT", logo: "/assets/jwt.svg" },
      { name: "MySQL", logo: "/assets/mysql.svg" },
      { name: "Postgre SQL", logo: "/assets/postgre.svg" },
      { name: "Python", logo: "/assets/python.svg" },
    ],
  },
  {
    name: "Angel Choquehuanca",
    role: "Desarrollador Backend",
    image: "/assets/circular_angel.png",
    skills: [
      { name: "PHP", logo: "/assets/php.svg" },
      { name: "Django", logo: "/assets/django.svg" },
      { name: "FastAPI", logo: "/assets/fastapi.svg" },
      { name: "JWT", logo: "/assets/jwt.svg" },
      { name: "Git", logo: "/assets/git.svg" },
      { name: "Github", logo: "/assets/github.svg" },
      { name: "MySQL", logo: "/assets/mysql.svg" },
      { name: "Python", logo: "/assets/python.svg" },
    ],
  },
  {
    name: "Diego Inga",
    role: "Diseñador UI/UX",
    image: "/assets/diego_circular.png",
    skills: [
      { name: "Figma", logo: "/assets/figma.svg" },
      { name: "JavaScript", logo: "/assets/js.svg" },
      { name: "Github", logo: "/assets/github.svg" },
      { name: "HTML", logo: "/assets/html.svg" },
      { name: "CSS", logo: "/assets/css.svg" },
      { name: "Tailwind CSS", logo: "/assets/tailwind.svg" },
    ],
  },
  {
    name: "Edward Pittman",
    role: "Project Manager",
    image: "/assets/edward_circular.png",
    skills: [
      { name: "Figma", logo: "/assets/figma.svg" },
    ],
  },
  {
    name: "Jesus Pezo",
    role: "Tester",
    image: "/assets/jesus.png",
    skills: [
      { name: "Github", logo: "/assets/github.svg" },
    ],
  },
];

export function NuestroEquipo() {
  // Usamos un array de booleanos para controlar qué miembros tienen los skills visibles
  const [showSkills, setShowSkills] = useState<boolean[]>(Array(team.length).fill(false));

  // Función para alternar el estado de los skills de un miembro específico
  const toggleSkills = (index: number) => {
    const updatedSkills = [...showSkills];
    updatedSkills[index] = !updatedSkills[index];
    setShowSkills(updatedSkills);
  };

  return (
    <div className="p-4 py-20 md:py-64">
      <div id="nuestroequipo" className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-semibold text-center degradedBlue bg-blueLight">Nuestro Equipo</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {team.map((member, index) => (
            <MotionTransition key={index}>
              <div
                className="p-8 w-full bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all cursor-pointer"
                onClick={() => toggleSkills(index)} // La acción ocurre al hacer clic en el div
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-center text-gray-400">{member.role}</p>
                {showSkills[index] && (
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                    <h4 className="text-lg font-semibold text-center mb-4">Skills</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {member.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center p-2 bg-gray-600 rounded-lg transition-transform transform hover:scale-105"
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-6 h-6 mr-2"
                          />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </MotionTransition>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NuestroEquipo;

