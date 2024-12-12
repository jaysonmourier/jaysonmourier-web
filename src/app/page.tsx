import Header from "@/app/components/Header/Header";
import ExperiencesSection from "@/app/components/ExperiencesSection/ExperiencesSection";
import ThemeButton from "./components/ThemeButton/ThemeButton";
import { ExperienceModel } from "./types/Experience";

const experiencesData: ExperienceModel[] = [
  {
    title: "Ingénieur informatique au Commissariat à l'énergie atomique et aux énergies alternatives",
    type: "Alternance",
    date: "2022-2024",
    location: "Paris",
    description: "Développement de l'application Astro-Colibri (iOS, Android et Web) avec le framework Flutter, mise en place des tests unitaires, pipeline CI/CD, développement back-end (Python et Flask).",
    logoPath: "/assets/images/cea_logo.webp",
    logoAlt: "The official CEA logo",
    imagePath: "/assets/images/cea_paris_saclay.webp",
    imageAlt: "CEA's Paris Saclay site"
  },
  {
    title: "Stage de recherche à l'université Paris Nanterre",
    type: "Stage de recherche",
    date: "2022",
    location: "Paris",
    description: "Stage de 5 mois sur l'implémentation d'algorithmes d'apprentissage par renforcement sur de la sélection de variables dans le contexte de la maladie de Charcot.",
    logoPath: "/assets/images/nanterre_logo.webp",
    logoAlt: "The official Nanterre University logo",
    imagePath: "/assets/images/nanterre_universite.webp",
    imageAlt: "Nanterre University"
  },
  {
    title: "Stage de recherche à l'université d'Avignon",
    type: "Stage de recherche",
    date: "2021",
    location: "Avignon",
    description: "Stage de 3 mois sur le traitement du langage naturel dans le contexte de l'ouverture de la base de données foncière DVF en open source.",
    logoPath: "/assets/images/avignon_universite_logo.webp",
    logoAlt: "The official Avignon University logo",
    imagePath: "/assets/images/avignon_universite.webp",
    imageAlt: "Avignon University"
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <ThemeButton />
      <Header />
      <ExperiencesSection experiences={experiencesData} />
    </div>
  );
}
