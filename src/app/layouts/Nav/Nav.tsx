import Email from "@/app/components/Email/Email";
import Linkedin from "@/app/components/Linkedin/Linkedin";
import styles from "@/app/layouts/Nav/Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Email />
            <Linkedin />
        </nav>
    );
}

export default Nav;