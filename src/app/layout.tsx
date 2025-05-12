import "./globals.css";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
  title: "DreamEvents - Cabină foto și efecte speciale pentru evenimente",
  description:
    "Servicii premium de cabină foto și efecte speciale cu fum pentru nunți și evenimente. Transformă momentele tale speciale în amintiri magice.",
  keywords:
    "cabină foto, efecte speciale, fum greu, artificii, nuntă, evenimente, gheață carbonică, petreceri, Iași",
  openGraph: {
    title: "DreamEvents - Cabină foto și efecte speciale pentru evenimente",
    description:
      "Servicii premium de cabină foto și efecte speciale cu fum pentru nunți și evenimente. Transformă momentele tale speciale în amintiri magice.",
    url: "https://dreamevents.ro",
    siteName: "DreamEvents",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DreamEvents - Cabină foto și efecte speciale",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
