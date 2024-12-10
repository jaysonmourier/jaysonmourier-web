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
                <div className="flex md:flex-row">
                    <div className="bg-black/60 p-4 text-white rounded-r-2xl md:rounded-r-none rounded-l-2xl flex flex-row items-center grow-[1]">
                    <div className="relative min-w-[100px] min-h-[100px]">
                        <Image
                            src={experience.logoPath}
                            alt={experience.logoAlt}
                            layout="fill"
                            className="rounded-full object-cover"
                        />
                    </div>
                        <div className="flex flex-col justify-around ml-4 gap-1">
                        <div className="md:hidden flex flex-row gap-2 items-center text-xs">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p>{experience.location}</p>
                                </div>
                            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-0 text-xs">
                                <div className="bg-black mr-2 py-1 px-2 rounded-full">{experience.type}</div>
                                <p>{experience.date}</p>
                            </div>
                            <p className="text-lg md:text-2xl">{experience.title}</p>
                        </div>
                    </div>
                    <div className="hidden max-w-[185px] md:flex md:flex-col md:flex-row justify-center md:items-center flex-1 bg-black/90 text-white md:rounded-r-2xl text-2xl px-2 gap-2">
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
                <div className="flex-1 bg-black rounded-2xl overflow-hidden h-[200px] md:h-auto">
                    <div className="relative w-full h-full">
                        <Image
                            src={experience.imagePath}
                            alt={experience.imageAlt}
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;