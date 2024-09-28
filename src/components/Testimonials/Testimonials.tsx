"use client"

import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Testimonials() {
    return (
        <div className="relative p-8 md:py-64" id="testimonios">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold">
                        Una de nuestras palabras 
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDark">Facilitamos la colaboración en proyectos universitarios, 
                            desde investigaciones hasta iniciativas personales.</p>
                    </div>
                </Reveal>
            </div>

            <Slide />
        </div>
    )
}
