import styles from '@/app/layouts/Skills/Skills.module.css';
import Card from '@/app/components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCode, faBrain, faServer } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <section className={styles.section}>
    <Card
        icon={faMobile}
        title='Développement Mobile'
        content='Expertise en Flutter et Dart pour créer des applications iOS, Android et Web performantes.'
    />
    <Card
        icon={faCode}
        title='Développement Web'
        content='Expérience en React (Next.js), Flask et Symfony pour la création d’interfaces web modernes et dynamiques.'
    />
    <Card
        icon={faBrain}
        title='Machine Learning'
        content='Compétences en Scikit-learn, TensorFlow et Pytorch pour des projets d’IA, d’apprentissage par renforcement et de traitement de données.'
    />
    <Card
        icon={faServer}
        title='DevOps & Bases de données'
        content='Maîtrise de Git, Docker, CI/CD ainsi que de Symfony, Flask, MySQL, Redis et Firestore pour la gestion et l’optimisation des systèmes back-end.'
    />
    </section>
    );
}

export default Skills;