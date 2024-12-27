"use client";

import { JSX } from 'react';
import styles from '@/app/components/NavButton/NavButton.module.css';

interface NavButtonProps {
    icon: JSX.Element,
    text?: string,
    onClickCallback?: () => void
}

const NavButton = ({ icon, text, onClickCallback }: NavButtonProps) => {
    return (
        <div className={styles.button} onClick={onClickCallback}>
            <div className={styles.icon}>
                {icon}
            </div>
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
}

export default NavButton;