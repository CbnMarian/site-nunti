"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Configurator from "@/components/configurator/Configurator";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Loader from "@/components/common/Loader";
import VideoGallery from "@/components/home/VideoGallery";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulăm încărcarea resurselor
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <VideoGallery />
        <Testimonials />
        <Configurator />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
