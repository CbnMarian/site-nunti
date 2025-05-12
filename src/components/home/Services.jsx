"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Cabină Foto",
      description:
        "Cabina foto perfectă pentru a captura momentele memorabile ale evenimentului tău. Includem recuzită distractivă, imprimări nelimitate și album digital.",
      icon: "📸",
      features: [
        "Imprimări nelimitate",
        "Recuzită distractivă",
        "Album digital",
        "Asistență tehnică",
      ],
    },
    {
      id: 2,
      title: "Efecte Speciale cu Fum",
      description:
        "Transformă primul dans sau momentele cheie într-o experiență magică cu efectele noastre de fum și artificii controlate profesional.",
      icon: "✨",
      features: [
        "Fum greu pentru dans",
        "Artificii pentru momente speciale",
        "Gheață carbonică",
        "Efecte de lumini",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-olive-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            Oferim servicii premium pentru a face din evenimentul tău unul de
            neuitat, cu amintiri care vor dura o viață.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-olive-200"
            >
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-olive-700">
                  {service.title}
                </h3>
                <p className="text-olive-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-gold-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-olive-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
