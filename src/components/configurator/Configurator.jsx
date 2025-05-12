"use client";

import OptionsPanel from "./OptionsPanel";
import PricingSummary from "./PricingSummary";

export default function Configurator() {
  return (
    <section id="configurator" className="py-20 bg-olive-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">
            Creează-ți Pachetul
          </h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            Personalizează pachetul perfect pentru evenimentul tău. Alege
            combinația ideală de servicii și vezi prețul în timp real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white">
            <OptionsPanel />
          </div>
          <div className="md:col-span-1 bg-white">
            <PricingSummary />
          </div>
        </div>
      </div>
    </section>
  );
}
