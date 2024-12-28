import { JSX } from "@emotion/react/jsx-runtime";
import styles from "@/app/layouts/Experience/Experience.module.css";
import Image from "next/image";
import RedirectButton from "@/app/components/RedirectButton/RedirectButton";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface ExperienceProps {
    title: string,
    subtitle: string,
    image: string,
    imageAlt: string,
    description: string,
    cards?: JSX.Element[],
    buttonText: string,
    buttonIcon?: IconDefinition,
    buttonLink: string
}

const Experience = ({ title, subtitle, image, imageAlt, description, cards, buttonText, buttonIcon, buttonLink }: ExperienceProps) => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{ subtitle }</p>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    style={
                        {
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }
                    }
                />
            </div>
            <p className={styles.description}>{description}</p>
            {Array.isArray(cards) && cards.length > 0 && (
                <div className={styles.cards}>
                    {cards.map((elt, index) => React.cloneElement(elt, { key: index }))}
                </div>
            )}
            <RedirectButton
                text={buttonText}
                icon={buttonIcon}
                link={buttonLink}
            />
        </section>
    );
}

export default Experience;