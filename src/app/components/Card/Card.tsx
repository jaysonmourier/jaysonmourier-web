import styles from '@/app/components/Card/Card.module.css';
import { JSX } from 'react';

interface CardProps {
    icon: JSX.Element,
    title: string,
    content: string
}

const Card = ({ icon, title, content }: CardProps) => {
    return (
        <div className={styles.card}>
            {icon}
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{content}</p>
        </div>
    );
}
 
export default Card;