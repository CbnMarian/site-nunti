"use client";

import { useState } from "react";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Dans în fum spectaculos",
      description:
        "Primul dans al mirilor într-o atmosferă magică creată cu mașina noastră de fum.",
      youtubeId: "VIDEO_ID_1", // Înlocuiește cu ID-ul real
      thumbnail: "/images/photo2.jpg",
      category: "fum",
    },
    {
      id: 2,
      title: "Distracție la cabina foto",
      description:
        "Invitații se bucură de cabina noastră foto cu props distractive.",
      youtubeId: "VIDEO_ID_2", // Înlocuiește cu ID-ul real
      thumbnail: "/images/photo1.jpg",
      category: "cabina",
    },
    {
      id: 3,
      title: "Artificii spectaculoase",
      description:
        "Momentul tăierii tortului acompaniat de artificii elegante.",
      youtubeId: "VIDEO_ID_3", // Înlocuiește cu ID-ul real
      thumbnail: "/images/photo3.jpg",
      category: "artificii",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="videos" className="py-20 bg-olive-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vezi Serviciile Noastre în Acțiune
          </h2>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto">
            Urmărește aceste videoclipuri pentru a vedea cum putem transforma
            evenimentul tău.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-olive-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all hover:scale-105"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative h-48">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-olive-700/60 rounded-full p-3">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-cream-100">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal YouTube Video */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white text-xl hover:text-gold-300"
              onClick={() => setActiveVideo(null)}
            >
              Închide ✕
            </button>

            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{activeVideo.title}</h3>
              <p className="text-cream-100">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
