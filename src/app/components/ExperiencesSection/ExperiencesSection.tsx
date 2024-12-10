import Experience from "../Experience/Experience";
import "@/app/components/ExperiencesSection/ExperiencesSection.css";
import React from "react";
import { ExperienceModel } from "@/app/types/Experience";

type WidgetProps = {
    experiences: ExperienceModel[]
};

const ExperiencesSection: React.FC<WidgetProps> = ({experiences}) => {
    return (
        <section className="experiences-section rounded-lg py-4 px-7 mt-4">
            <p className="font-bold text-5xl mt-4 mb-8">Mon<br />Expérience</p>
            {experiences.map((experience, index) => (
                <div className={index > 0 ? "": ""}>
                    <Experience 
                    key={index}
                    experience={experience}
                />
                {index < experiences.length - 1 && (<hr className="my-4 max-w-[50%] mx-auto" />)}
                </div>
            ))}
        </section>
    );
};

export default ExperiencesSection;