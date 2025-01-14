import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPython, faReact, faFlutter, faGit, faJava, faDocker } from "@fortawesome/free-brands-svg-icons";

library.add(faPython, faReact, faFlutter, faGit, faJava, faDocker);

const InterFont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayson Mourier",
  description: "Jayson Mourier - Développeur full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${InterFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
