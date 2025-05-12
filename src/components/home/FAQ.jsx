"use client";

import { useState } from 'react';

export default function FAQ() {
  const faqItems = [
    {
      question: "Cât durează instalarea cabinei foto și a efectelor de fum?",
      answer: "Instalarea cabinei foto durează aproximativ 30-45 de minute, iar pentru efectele de fum este necesară o pregătire de 15-20 de minute înainte de momentul utilizării. Venim întotdeauna cu cel puțin o oră înainte de începerea evenimentului pentru a asigura că totul este pregătit la timp."
    },
    {
      question: "Este sigur fumul utilizat pentru efecte speciale?",
      answer: "Da, fumul este 100% sigur și netoxic. Folosim doar echipamente profesionale și soluții certificate, care nu lasă reziduuri și nu prezintă niciun risc pentru sănătate. Efectul este creat prin vaporizarea unei soluții pe bază de apă."
    },
    {
      question: "Se poate utiliza cabina foto și în spații exterioare?",
      answer: "Da, cabina noastră foto poate fi instalată atât în interior, cât și în exterior, atât timp cât există o sursă de curent electric în apropiere și condițiile meteorologice permit (fără precipitații). Pentru evenimente în aer liber, recomandăm să existe un acoperiș sau o zonă protejată."
    },
    {
      question: "Putem avea acces la toate fotografiile făcute în cabina foto?",
      answer: "Da, toate fotografiile realizate în cabina foto vă sunt oferite digital după eveniment, prin intermediul unui link de download sau pe un stick USB, în funcție de preferințele dumneavoastră. De asemenea, oferim și opțiunea unui album fizic personalizat cu cele mai reușite fotografii."
    },
    {
      question: "Ce se întâmplă dacă echipamentul are probleme tehnice în timpul evenimentului?",
      answer: "Toate echipamentele noastre sunt verificate înainte de fiecare eveniment și avem întotdeauna echipamente de rezervă. În plus, un tehnician va fi prezent pe toată durata evenimentului pentru a asigura funcționarea optimă a echipamentelor și pentru a rezolva prompt orice situație neprevăzută."
    },
    {
      question: "Cum putem rezerva serviciile voastre și care este avansul necesar?",
      answer: "Pentru a rezerva data, este necesar un avans de 30% din valoarea pachetului ales, iar diferența se achită cu 2-3 zile înainte de eveniment. Rezervarea se poate face prin completarea formularului de contact de pe site, iar un consultant vă va contacta în cel mai scurt timp pentru a discuta detaliile și pentru a finaliza contractul."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">Întrebări Frecvente</h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre serviciile noastre.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  activeIndex === index ? 'bg-olive-700 text-white' : 'bg-white hover:bg-cream-100'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold">{item.question}</span>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180 text-white' : 'text-olive-700'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-inner border-t border-olive-100">
                  <p className="text-olive-800">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
