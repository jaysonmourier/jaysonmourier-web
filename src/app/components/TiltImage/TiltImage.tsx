"use client";

import { useState } from "react";
import Image from "next/image";

const TiltImage = () => {
    const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Calculer les angles
        const rotateX = ((y / height) - 0.5) * 15; // Inclinaison sur X
        const rotateY = ((x / width) - 0.5) * -15; // Inclinaison sur Y

        // Mettre à jour le style de transformation
        setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        // Réinitialiser la transformation
        setTransform("rotateX(0deg) rotateY(0deg)");
    };

    return (
        <div
            className="relative bg-green-500 aspect-square rounded-2xl bg-transparent"
            style={{
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="w-full h-full transition-transform duration-300 ease-out shadow-lg rounded-2xl"
                style={{
                    transform,
                    transformStyle: "preserve-3d",
                }}
            >
                <Image
                    src={"/jayson.jpg"}
                    alt="Photo de Jayson Mourier"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center rounded-2xl"
                />
            </div>
        </div>
    );
};

export default TiltImage;
