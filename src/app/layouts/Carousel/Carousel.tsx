import styles from '@/app/layouts/Carousel/Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlutter, faPhp, faJs, faSymfony, faGit, faJava, faReact, faLinux, faDocker } from '@fortawesome/free-brands-svg-icons';

const Carousel = () => {
    const icons = [
        faFlutter, faPhp, faJs, faSymfony, faGit, faJava, faReact, faLinux, faDocker
    ];

    return (
        <div className={styles.carousel}>
            <div className={styles['carousel-track']}>
                {icons.map((icon, index) => (
                    <FontAwesomeIcon key={index} icon={icon} />
                ))}
                {icons.map((icon, index) => (
                    <FontAwesomeIcon key={`dup-${index}`} icon={icon} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;