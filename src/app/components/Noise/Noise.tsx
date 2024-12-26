"use client";

import { useEffect, useRef } from 'react';
import styles from '@/app/components/Noise/Noise.module.css';

const Noise = () => {
    const noiseRef = useRef<HTMLDivElement | null>(null); // Typage TypeScript

    useEffect(() => {
        const noiseElement = noiseRef.current; // Récupération de l'élément
        if (!noiseElement) return; // Vérifie si l'élément existe

        let animationId: number; // ID pour l'animation
        let x = 0;
        let y = 0;

        const animateNoise = () => {
            // Génère des valeurs aléatoires pour X et Y
            x = (Math.random() - 0.5) * 10; // Entre -5px et 5px
            y = (Math.random() - 0.5) * 10;

            // Applique les transformations séparées
            noiseElement.style.transform = `translateX(${x}px) translateY(${y}px)`;

            // Continue l'animation
            animationId = requestAnimationFrame(animateNoise);
        };

        // Lancement de l'animation
        animationId = requestAnimationFrame(animateNoise);

        // Nettoyage lors du démontage
        return () => cancelAnimationFrame(animationId);
    }, []); // Dépendances vides pour s'exécuter une seule fois

    return <div ref={noiseRef} className={styles.noise}></div>;
};

export default Noise;
