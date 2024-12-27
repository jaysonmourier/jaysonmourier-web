import styles from '@/app/components/BigText/BigText.module.css';

interface BigTextProps {
    text: string
}

const BigText = ({ text }: BigTextProps) => {
    return (
        <p className={styles.text}>{ text }</p>
    );
}

export default BigText;