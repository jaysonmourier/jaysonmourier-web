import Nav from "@/app/layouts/Nav/Nav";
import styles from "@/app/page.module.css";
import Header from "@/app/layouts/Header/Header";
import Carousel from "@/app/layouts/Carousel/Carousel";
import Noise from "@/app/components/Noise/Noise";
import Skills from "./layouts/Skills/Skills";
import Experience from "./layouts/Experience/Experience";
import { faExternalLink, faMobile, faCode, faUsers, faRocket, faLaptop } from "@fortawesome/free-solid-svg-icons";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";

export default function Home() {
  return (
    <>
      <Noise />
      <div className={styles.home}>
        <div className={styles.container}>
          <Nav />
          <Header />
        </div>
      </div>
      <Carousel />
      <div className={styles.container}>
        <Skills />
      </div>
      <div className={styles.home}>
        <div className={styles.container}>
          <Experience
            title="Astro-Colibri - Analyse en temps réel des phénomènes astrophysiques"
            subtitle="Développement d'une application scientifique - Alternance de 2 ans au CEA"
            image="/colibri.png"
            imageAlt="Astro-Colibri logo"
            description="Astro-Colibri est une application d'analyse avancée des signaux multimessagers en astrophysique, permettant un traitement en temps réel des données. Accessible sur iOS, Android et sur le web, elle offre une interface fluide grâce au framework Flutter et exploite une API robuste basée sur Flask pour une gestion efficace des données scientifiques."
            buttonText="Voir le projet"
            buttonLink="https://astro-colibri.science"
            buttonIcon={faExternalLink}
            cards={
              [
                <ExperienceCard
                  key="1"
                  icon={faMobile}
                  content="Interface développée en Dart avec Flutter pour des performances optimales sur toutes les plateformes."
                />,
                <ExperienceCard
                  key="2"
                  icon={faCode}
                  content="API publique conçue avec Flask pour une gestion sécurisée des données."
                />,
                <ExperienceCard
                  key="3"
                  icon={faUsers}
                  content="Plus de 10 000 téléchargements et 1 200 utilisateurs actifs mensuels."
                />
              ]
            }
          />
          <Experience
            title="Optimisation en théorie des graphes par apprentissage par renforcement (RL)"
            subtitle="Projet de recherche en apprentissage automatique - Master 2"
            image="/graph.png"
            imageAlt="Astro-Colibri logo"
            description="Ce projet de recherche, réalisé dans le cadre de mon Master 2, explore l'application de l'apprentissage par renforcement (RL) pour résoudre des problèmes complexes en théorie des graphes. En particulier, j'ai développé et implémenté un algorithme basé sur l'optimisation de politique proximale (PPO), permettant d'améliorer significativement l'efficacité de la recherche de contre-exemples."
            buttonText="Lire le mémoire"
            buttonLink="https://drive.proton.me/urls/4B2E0YV0K4#y6Lk8LbEKxcw"
            buttonIcon={faExternalLink}
            cards={
              [
                <ExperienceCard
                  key="4"
                  icon={faRocket}
                  content="Algorithme avancé : Approche par renforcement avec PPO."
                />,
                <ExperienceCard
                  key="5"
                  icon={faLaptop}
                  content="Technologies utilisées : Python et Pytorch"
                />,
                <ExperienceCard
                  key="6"
                  icon={faLaptop}
                  content="Résultats : Amélioration mesurable des performances sur des problèmes complexes en théorie des graphes."
                />
              ]
            }
          />
        </div>
      </div>
    </>
  );
}
