"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { ImageList, ImageListItem } from "@mui/material";

export function Principal() {
    const images = [
        { img: "/assets/imagen_1.jpg", title: "Imagen 1" },
        { img: "/assets/imagen_2.jpg", title: "Imagen 2" },
        { img: "/assets/imagen_6.jpg", title: "Imagen 6" },
        { img: "/assets/imagen_7.jpg", title: "Imagen 7" },
        { img: "/assets/imagen_8.jpg", title: "Imagen 8" },
        { img: "/assets/imagen_9.jpg", title: "Imagen 9" },
    ];

    return (
        <div className="relative p-4 md:py-20">
    <BackgroundRadialRight />
    <div className="grid max-w-7xl mx-auto md:grid-cols-2 gap-16">
        <div className="md:-ml-10 mt-20"> {/* Agregué mt-20 para bajarlo */}
            <Reveal>
                <h1 className="text-6xl font-semibold">
                    CONECTA, CREA Y
                    <span className="block degradedBlue bg-blueLight">
                        COLABORA: IMPULSA
                    </span>
                    CON REPIFY
                </h1>
            </Reveal>
            <Reveal>
                <p className="max-w-md mt-10">
                    Repify une a estudiantes de diferentes disciplinas para
                    crear proyectos innovadores y multidisciplinarios.
                </p>
            </Reveal>
            <Reveal>
                <div className="my-8">
                    <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial transition-colors duration-300 hover:bg-blue-600">
                        Empieza ahora
                    </Link>
                </div>
            </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
            <ImageList sx={{ width: '100%', height: 600 }} variant="woven" cols={3} gap={16}>
                {images.map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`${item.img}?w=500&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderRadius: '8px' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </MotionTransition>
    </div>
</div>

    );
}
