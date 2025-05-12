"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "/images/photo1.jpg",
      alt: "Cabină foto la un eveniment",
      category: "cabina",
    },
    {
      id: 2,

      src: "/images/photo2.jpg",
      alt: "Efect de fum la dansul mirilor",
      category: "fum",
    },
    {
      id: 3,
      src: "/images/photo3.jpg",
      alt: "Artificii la o nuntă",
      category: "artificii",
    },
    {
      id: 4,
      src: "/images/photo4.jpg",
      alt: "Invitați la cabina foto",
      category: "cabina",
    },
    {
      id: 5,
      src: "/images/photo5.jpg",
      alt: "Efecte de fum și lumini",
      category: "fum",
    },
    {
      id: 6,
      src: "/images/photo6.jpg",
      alt: "Momente speciale capturate",
      category: "cabina",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("toate");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "toate"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-olive-800">
            Galerie
          </h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            Privește câteva momente magice create pentru clienții noștri.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => setSelectedCategory("toate")}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === "toate"
                  ? "bg-olive-700 text-white"
                  : "bg-cream-100 text-olive-700 hover:bg-cream-200"
              }`}
            >
              Toate
            </button>
            <button
              onClick={() => setSelectedCategory("cabina")}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === "cabina"
                  ? "bg-olive-700 text-white"
                  : "bg-cream-100 text-olive-700 hover:bg-cream-200"
              }`}
            >
              Cabină Foto
            </button>
            <button
              onClick={() => setSelectedCategory("fum")}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === "fum"
                  ? "bg-olive-700 text-white"
                  : "bg-cream-100 text-olive-700 hover:bg-cream-200"
              }`}
            >
              Efecte Fum
            </button>
            <button
              onClick={() => setSelectedCategory("artificii")}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === "artificii"
                  ? "bg-olive-700 text-white"
                  : "bg-cream-100 text-olive-700 hover:bg-cream-200"
              }`}
            >
              Artificii
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
