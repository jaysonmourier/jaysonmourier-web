"use client";

import styles from '@/app/components/RedirectButton/RedirectButton.module.css';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RedirectButtonProps {
    link: string
}

const RedirectButton = ({ link }: RedirectButtonProps) => {
    const handleRedirect = () => {
        window.open(link, '_blank', 'noopener, noreferrer');
    }
    
    return (
        <div className={styles.redirectButton} onClick={handleRedirect}>
            <p style={{ fontSize: '0.75em' }}>Vidéo</p>
            <FontAwesomeIcon style={{ width: '0.70em', height: '0.70em' }} icon={faUpRightFromSquare} />
        </div>
    );
}

export default RedirectButton;