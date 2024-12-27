"use client";

import React, { useState } from 'react';
import NavButton from "@/app/components/NavButton/NavButton";
import styles from "@/app/layouts/Nav/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Nav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleFileClick = () => {
        window.open("https://drive.proton.me/urls/HRSGRECTYR#OBD0Hewqb20h", '_blank', 'noopener, noreferrer');
    }

    const handleEmailClick = async () => {
        await navigator.clipboard.writeText("jayson.mourier@proton.me");
        handleOpen()
    }

    const handleLinkedinClick = () => {
        window.open("https://fr.linkedin.com/in/jaysonmourier", '_blank', 'noopener, noreferrer');
    }

    const handleGithubClick = () => {
        window.open("https://github.com/jaysonmourier", '_blank', 'noopener, noreferrer');
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <NavButton
                    icon={<FontAwesomeIcon icon={faFile} />}
                    onClickCallback={handleFileClick}
                />
                <NavButton
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    text="jayson.mourier@proton.me"
                    onClickCallback={handleEmailClick}
                />
            </div>
            <div className={styles.right}>
                <NavButton
                    icon={<FontAwesomeIcon icon={faLinkedin} />}
                    onClickCallback={handleLinkedinClick}
                />
                <NavButton
                    icon={<FontAwesomeIcon icon={faGithub} />}
                    onClickCallback={handleGithubClick}
                />
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Email copié dans le presse papier!
                </Alert>
            </Snackbar>
        </nav>
    );
}

export default Nav;