"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { datauniversidades } from "./universidades.data";

export function PaymentsMethods() {
  return (
    <div className="relative py-20 md:py-55" id="servicios">
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 5, // Ajusta el número de logos visibles
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 1, // Rotación rápida sin pausa
            disableOnInteraction: false,
          }}
          loop={true} // Habilita el loop continuo
          speed={2000} // Velocidad suave de transición
          grabCursor={true}
          slidesPerView="auto" // Ajuste dinámico de las diapositivas visibles
          spaceBetween={30} // Ajuste del espacio entre logos
        >
          {datauniversidades.map(({ id, image }) => (
            <SwiperSlide
              key={id}
              className="flex items-center slider-horizontal"
            >
              <Image
                src={`/assets/${image}`}
                alt="University Logo"
                width="70"
                height="70"
                className="h-[60px] w-[120px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
