"use client";

import styles from '@/app/components/RedirectButton/RedirectButton.module.css';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RedirectButtonProps {
    text: string,
    icon?: IconDefinition,
    link: string
}

const RedirectButton = ({ text, icon, link }: RedirectButtonProps) => {
    const handleRedirect = () => {
        window.open(link, '_blank', 'noopener, noreferrer');
    }
    
    return (
        <div className={styles.redirectButton} onClick={handleRedirect}>
            <p style={{ fontSize: '0.75em' }}>{ text }</p>
            {icon && <FontAwesomeIcon style={{ width: '0.70em', height: '0.70em' }} icon={icon} />}
        </div>
    );
}

export default RedirectButton;