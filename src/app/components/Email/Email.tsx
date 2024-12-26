import styles from '@/app/components/Email/Email.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Email = () => {
    return (
        <div className={styles.email}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p className={styles.text}>jayson.mourier@proton.me</p>
        </div>
    );
};

export default Email;