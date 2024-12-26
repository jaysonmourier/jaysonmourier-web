import Image from "next/image";
import styles from "@/app/components/RoundedAvatar/RoundedAvatar.module.css";

const RoundedAvatar = () => {
    return (
        <div className={styles.roundedAvatar}>
            <Image
            src={'/jayson.webp'}
            alt={'Une photo de Jayson Mourier'}
            style={
                {
                    objectFit: 'cover',
                    objectPosition: 'center'
                }
            }
            fill
            />
        </div>
    );
}

export default RoundedAvatar;