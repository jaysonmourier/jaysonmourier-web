import styles from '@/app/components/Linkedin/Linkedin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Linkedin = () => {
    return (
        <div className={styles.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
        </div>
    );
}

export default Linkedin;