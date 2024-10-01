import { BestBusiness } from "@/components/que_es_repify";
import { Beneficios } from "@/components/Beneficios/Beneficios";
import { Contador } from "@/components/Contador";
import { Principal } from "@/components/Principal";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/universidades";
import { NuestrasPalabras } from "@/components/Testimonials";
import { NuestroEquipo } from "@/components/NuestroEquipo/NuestroEquipo";


export default function Home() {
  return (
    <>
      <Header />
      <Principal />
      <Contador />
      <BestBusiness />
      <Beneficios />
      <NuestroEquipo />
      <NuestrasPalabras />
      <PaymentsMethods />
    </>
  )
}
