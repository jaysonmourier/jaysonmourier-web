import styles from '@/app/components/Card/Card.module.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProps {
    icon: IconDefinition,
    title: string,
    content: string
}

const Card = ({ icon, title, content }: CardProps) => {
    return (
        <div className={styles.card}>
            <FontAwesomeIcon icon={icon} />
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{content}</p>
        </div>
    );
}
 
export default Card;