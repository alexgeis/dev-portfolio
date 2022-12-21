import styles from "./HeroImg.module.css"
import geisIcon from "../../../assets/img/alex-character.png"
import geisPhoto from "../../../assets/img/alex.jpeg"

export const HeroImg = () => {

    return (
        <div className={styles.wrapper}>
            <img src={geisPhoto} alt="alex geis photo image" className={styles.heroImg}/>
            <img src={geisIcon} alt="alex geis icon image" className={styles.heroIcon}/>
        </div>
    )
}