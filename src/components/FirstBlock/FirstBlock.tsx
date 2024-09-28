"use client";
import Link from "next/link";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef } from "react";

export function FirstBlock() {
    const images = [
        "/assets/1.webp",
        "/assets/card-2.png",
        "/assets/card-3.png",  // Agrega las imágenes que desees
    ];

    // Para crear la animación personalizada cuando cambia de slide
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.on("slideChangeTransitionStart", () => {
                const currentSlide = swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex];
                currentSlide.style.transform = "scale(0.85) translateZ(-200px)";
                currentSlide.style.opacity = "0";

                setTimeout(() => {
                    currentSlide.style.transition = "all 1.2s ease"; // Hacer la transición más lenta
                    currentSlide.style.transform = "scale(1) translateZ(0)";
                    currentSlide.style.opacity = "1";
                }, 50);
            });
        }
    }, []);

    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2 gap-16">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
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
                            crear proyectos innovadores y multidisciplinarios,
                            facilitando la colaboración en proyectos universitarios,
                            desde investigaciones hasta iniciativas personales.
                        </p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial transition-colors duration-300 hover:bg-blue-600"> {/* Cambia solo el color al pasar el cursor */}
                                Empieza ahora
                            </Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Swiper
                        modules={[Pagination, Autoplay]} // Eliminar navegación (flechas)
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }} // Dejar solo la paginación
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="w-72 md:w-full"
                        ref={swiperRef} // Referencia para la animación personalizada
                    >
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="h-auto w-full transition-transform duration-1000 ease-out transform scale-90" // Animación inicial más lenta
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MotionTransition>
            </div>
        </div>
    );
}

