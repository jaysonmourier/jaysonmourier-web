"use client";

import { useEffect, useRef } from 'react';
import styles from '@/app/components/Noise/Noise.module.css';

const Noise = () => {
    const noiseRef = useRef<HTMLDivElement | null>(null); 

    useEffect(() => {
        const noiseElement = noiseRef.current; 
        if (!noiseElement) return; 

        let animationId: number; 
        let x = 0;
        let y = 0;

        const animateNoise = () => {
            x = (Math.random() - 0.5) * 10; 
            y = (Math.random() - 0.5) * 10;

            noiseElement.style.transform = `translateX(${x}px) translateY(${y}px)`;

            animationId = requestAnimationFrame(animateNoise);
        };

        animationId = requestAnimationFrame(animateNoise);

        return () => cancelAnimationFrame(animationId);
    }, []); 

    return <div ref={noiseRef} className={styles.noise}></div>;
};

export default Noise;