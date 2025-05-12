import Header from "@/components/layout/Header";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      jsx{/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-olive-800 to-olive-900 text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transformă momentele în <br />
            <span className="text-gold-400">amintiri magice</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cabină foto și efecte speciale cu fum pentru evenimente de neuitat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-olive-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Descoperă serviciile
            </a>
            <a
              href="#configurator"
              className="bg-gold-400 text-olive-900 hover:bg-gold-300 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Creează pachetul tău
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <Services />
    </main>
  );
}
