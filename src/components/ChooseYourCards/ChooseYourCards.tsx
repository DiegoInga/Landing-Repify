"use client";
import { motion } from "framer-motion";
import { Users, Rocket, GraduationCap, Briefcase, Network, Eye } from "lucide-react";
import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

// Tipos de los datos de beneficios
interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

export const BenefitsSection: FC = () => {
  // Datos de los beneficios
  const benefits: Benefit[] = [
    {
      icon: <Users className="w-12 h-12 mb-4 text-cyan-400" />,
      title: "Trabajo en Equipo",
      description: "Desarrolla habilidades de colaboración en proyectos reales",
    },
    {
      icon: <Rocket className="w-12 h-12 mb-4 text-purple-400" />,
      title: "Interdisciplinariedad",
      description: "Colabora con estudiantes de diversas carreras",
    },
    {
      icon: <GraduationCap className="w-12 h-12 mb-4 text-pink-400" />,
      title: "Desarrollo de Habilidades",
      description: "Mejora tus competencias profesionales y personales",
    },
    {
      icon: <Briefcase className="w-12 h-12 mb-4 text-yellow-400" />,
      title: "Construcción de Portfolio",
      description: "Crea un portafolio impresionante con proyectos reales",
    },
    {
      icon: <Network className="w-12 h-12 mb-4 text-green-400" />,
      title: "Networking Académico",
      description: "Conecta con profesionales y otros estudiantes",
    },
    {
      icon: <Eye className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Visibilidad Académica",
      description: "Destaca en el ámbito universitario y profesional",
    },
  ];

  // useInView hook para detectar cuando el usuario llega a la sección
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo activa la animación una vez
    threshold: 0.2,    // Umbral: porcentaje de la sección visible en la pantalla para activar la animación
  });

  return (
    <div className="relative px-6 py-20 md:py-64" id="beneficios" ref={ref}>
      {/* Título */}
      <div className="container px-4 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center md:text-5xl degradedBlue bg-blueLight"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Beneficios
        </motion.h2>

        {/* Tarjetas de beneficios */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ opacity: 1 }} // Mantener la opacidad en hover
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                className="relative overflow-hidden transition-colors bg-gray-800 border border-gray-700 p-6 rounded-lg"
              >
                {/* El div del gradiente ahora cubre todo el card */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0"
                  whileHover={{ opacity: 1 }} // Gradiente visible al hacer hover
                  transition={{ duration: 0.3 }}
                />
                <div className="relative pt-6 text-center z-10">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const ChooseYourCards = BenefitsSection;

