"use client"

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Line } from 'react-icons/ri'
import { useState } from "react"
import { MotionTransition } from "../MotionTransition/"
import { Reveal } from "../Reveal";

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
      <MotionTransition>
        <nav className="flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto md:py-8 w-full">
          
          {/* Logo alineado a la izquierda */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo_!.png" width="150" height="40" alt="Logo Repify" />
            </Link>
          </div>

          {/* Menú de subtítulos centrado */}
          <div className="flex-1 flex justify-center"> {/* Eliminamos ml-12 para centrar mejor el menú */}
            <div className="hidden md:flex md:space-x-6">
              {[
                { id: 1, name: "¿Qué es Repify?", idLink: "#features" },
                { id: 2, name: "Beneficios", idLink: "#beneficios" },
                { id: 3, name: "Nuestro Equipo", idLink: "#nuestroequipo" },
                { id: 4, name: "Testimonios", idLink: "#testimonios" },
                { id: 5, name: "Colaboración", idLink: "#servicios" },
              ].map(({ id, name, idLink }) => (
                <div key={id} className="px-2 transition-all duration-500 ease-in-out">
                  <Link href={idLink} className="text-lg hover:text-secondary">
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Menú hamburguesa para móviles */}
          <RiMenu3Line
            className="block text-3xl md:hidden cursor-pointer"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />

          {/* Menú desplegable para móviles */}
          <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:hidden`}>
            <div className="flex flex-col p-4 mt-4 md:p-0 md:mt-0">
              {[
                { id: 1, name: "¿Qué es Repify?", idLink: "/que-es-repify" },
                { id: 2, name: "Beneficios", idLink: "/beneficios" },
                { id: 3, name: "Nuestro Equipo", idLink: "/nuestro-equipo" },
                { id: 4, name: "Testimonios", idLink: "/testimonios" },
                { id: 5, name: "Colaboración", idLink: "/colaboracion" },
              ].map(({ id, name, idLink }) => (
                <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                  <Link href={idLink} className="text-lg hover:text-secondary">
                    {name}
                  </Link>
                </div>
              ))}
              <Reveal>
                <div className="my-8">
                  <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial transition-colors duration-300 hover:bg-blue-600">
                    Iniciar Sesión
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </nav>
      </MotionTransition>
    );
}
