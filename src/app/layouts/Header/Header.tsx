import BigText from "@/app/components/BigText/BigText";
import RedirectButton from "@/app/components/RedirectButton/RedirectButton";
import RoundedAvatar from "@/app/components/RoundedAvatar/RoundedAvatar";
import styles from "@/app/layouts/Header/Header.module.css";
import Image from "next/image";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className={styles.header}>
            <RoundedAvatar />
            <div className={styles.presentationText}>
                <p className={styles.littleText}>Salut, moi c&apos;est Jayson</p>
                <Image
                    src={'/handwave.svg'}
                    alt={'hand wave'}
                    width={22}
                    height={22}
                />
            </div>
            <BigText text="Construire des applications performantes et évolutives. Expertise Flutter." />
            <RedirectButton
                text="Vidéo"
                icon={faExternalLink} 
                link="https://youtu.be/4OOuJzf5c_w?si=eVLz_vX2vdauROou" 
            />
        </header>
    );
}

export default Header;