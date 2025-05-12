"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ana & Mihai",
      event: "Nuntă, Iunie 2023",
      image: "/images/couple1.jpg", // Adaugă imagini dacă ai
      text: "Efectul de fum pentru primul nostru dans a fost absolut magic! Toți invitații au fost impresionați și avem fotografii minunate. Recomandăm cu căldură!"
    },
    {
      id: 2,
      name: "Elena & Andrei",
      event: "Nuntă, August 2023",
      image: "/images/couple2.jpg",
      text: "Cabina foto a fost atracția principală pentru invitați, iar efectele de fum au transformat dansul nostru într-un moment de basm. Servicii excelente și echipă profesionistă!"
    },
    {
      id: 3,
      name: "Cristina & Radu",
      event: "Nuntă, Octombrie 2023",
      image: "/images/couple3.jpg", 
      text: "Am ales pachetul cu artificii și fum greu - a fost spectaculos! Toți invitații au făcut poze și videoclipuri, iar momentul dansului a devenit cu adevărat de neuitat."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-olive-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Suntem mândri să creăm momente magice pentru clienții noștri.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-olive-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-gold-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v6a6 6 0 01-6 6H3v2c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-8c0-3.314-2.686-6-6-6H10zm14 0v6a6 6 0 01-6 6h-1v2c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-8c0-3.314-2.686-6-6-6h-1z" />
                </svg>
              </div>
              
              <p className="text-cream-100 mb-6 flex-grow italic">
                {testimonial.text}
              </p>
              
              <div className="flex items-center mt-auto">
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gold-300 text-sm">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
