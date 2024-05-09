import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Logros Motívate a Educarte",
  description:
    "Tarjetas de logros cuando completas tus tareas en Motívate a Educarte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Paytone+One&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Allison&family=Great+Vibes&family=Mynerve&family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
