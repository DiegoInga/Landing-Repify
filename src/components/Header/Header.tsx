"use client"

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Line } from 'react-icons/ri'
import { useState } from "react"
import { MotionTransition } from "../MotionTransition/"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
      <MotionTransition>
        <nav className="flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto md:py-8 w-full bg-black">
          
          {/* Logo alineado a la izquierda */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/assets/logo_!.png" width="150" height="40" alt="Logo Repify" />
            </Link>
          </div>

          {/* Menú de subtítulos alineado a la derecha */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex md:space-x-6">
              {[
                { id: 1, name: "¿Qué es Repify?", idLink: "#features" },
                { id: 2, name: "Beneficios", idLink: "#beneficios" },
                { id: 3, name: "Nuestro Equipo", idLink: "#nuestroequipo" }, 
              ].map(({ id, name, idLink }) => (
                <div key={id} className="px-2 transition-all duration-500 ease-in-out">
                  <Link href={idLink} className="text-lg text-white hover:text-secondary">
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Menú hamburguesa para móviles */}
          <RiMenu3Line
            className="block text-3xl md:hidden cursor-pointer text-white"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />

          {/* Menú desplegable para móviles con fondo borroso y opacidad */}
          <div className={`absolute top-16 right-0 bg-black bg-opacity-60 backdrop-blur-md w-full md:hidden transition-transform duration-500 ease-in-out ${openMobileMenu ? 'block' : 'hidden'}`}>
            <div className="flex flex-col p-4">
              {[
                { id: 1, name: "¿Qué es Repify?", idLink: "#features" },
                { id: 2, name: "Beneficios", idLink: "#beneficios" },
                { id: 3, name: "Nuestro Equipo", idLink: "#nuestroequipo" },
              ].map(({ id, name, idLink }) => (
                <div key={id} className="px-4 py-2 transition-all duration-500 ease-in-out">
                  <Link href={idLink} className="text-lg text-white hover:text-secondary">
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </MotionTransition>
    );
}








