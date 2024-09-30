import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Testimonials } from "@/components/Testimonials";
import { NuestroEquipo } from "@/components/NuestroEquipo/NuestroEquipo";


export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseYourCards />
      <NuestroEquipo />
      <Testimonials />
      <PaymentsMethods />
      <Footer />
    </>
  )
}
