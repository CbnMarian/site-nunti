"use client";

import Header from "@/components/layout/Header";
import Services from "@/components/home/Services";
import Configurator from "@/components/configurator/Configurator"; // Importul configuratorului

export default function Home() {
  // Funcție sigură pentru scrollIntoView cu verificare null
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-olive-700 text-black">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transformă momentele în <br />
            <span className="text-black">amintiri magice</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            Cabină foto și efecte speciale cu fum pentru evenimente de neuitat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("services");
              }}
            >
              Descoperă serviciile
            </a>
            <a
              href="#configurator"
              className="bg-gold-400 text-black hover:bg-gold-300 px-8 py-3 rounded-full font-bold transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement("configurator");
              }}
            >
              Creează pachetul tău
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <Services />
      {/* Configurator Section */}
      <Configurator /> {/* Adăugat configuratorul aici */}
    </main>
  );
}
