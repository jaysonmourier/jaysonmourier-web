import styles from '@/app/components/ExperienceCard/ExperienceCard.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ExperienceCardProps {
    icon: IconDefinition,
    content: string
}

const ExperienceCard = ({ icon, content }: ExperienceCardProps) => {
    return (
        <div className={styles.card}>
            <FontAwesomeIcon icon={icon} />
            <p className={styles.content}>{content}</p>
        </div>
    );
}
 
export default ExperienceCard;