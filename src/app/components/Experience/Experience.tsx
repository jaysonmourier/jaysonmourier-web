import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ExperienceModel } from "@/app/types/Experience";


type WidgetProps = {
    experience: ExperienceModel
};

const Experience: React.FC<WidgetProps> = ({experience}) => {
    return (
        <div>
                <div className="flex flex-col md:flex-row">
        {/* Section gauche : Informations principales */}
        <div className="bg-black/60 p-4 text-white rounded-2xl md:rounded-l-2xl md:rounded-r-none flex flex-col md:flex-row md:flex-1 items-center">
            {/* Image du logo */}
            <div className="relative min-w-[100px] min-h-[100px]">
                <Image
                    src={experience.logoPath}
                    alt={experience.logoAlt}
                    layout="fill"
                    className="rounded-full object-cover"
                />
            </div>

            {/* Informations textuelles */}
            <div className="flex flex-col justify-around items-center md:items-start gap-1 md:ml-4">
                {/* Métadonnées */}
                <div className="flex flex-row items-center gap-3 text-xs mt-2">
                    {/* Affichage conditionnel pour mobile */}
                    <div className="bg-black py-1 px-2 rounded-full">{experience.type}</div>
                    <div className="md:hidden flex flex-row gap-2 items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>{experience.location}</p>
                    </div>
                    <p>{experience.date}</p>
                </div>

                {/* Titre */}
                <p className="text-lg md:text-2xl text-center md:text-left">{experience.title}</p>
            </div>
        </div>

        {/* Section droite : Affichage pour desktop */}
        <div className="hidden md:flex md:flex-row justify-center items-center flex-1 bg-black/90 text-white rounded-r-2xl text-2xl px-2 gap-2 max-w-[185px]">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{experience.location}</p>
        </div>
    </div>


                {/* */}
                <div className="flex flex-col md:flex-row mt-2 gap-1">
                <div className="bg-black/60 rounded-2xl p-4 text-white flex-1">
                    <p className="text-3xl tracking-wide">Travail<br />effectué</p>
                    <p className="text-lg mt-4">{experience.description}</p>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden min-h-[200px] md:min-h-[200px] relative">
    <Image
        src={experience.imagePath}
        alt={experience.imageAlt}
        layout="fill"
        className="object-cover"
    />
</div>

            </div>
        </div>
    );
};

export default Experience;