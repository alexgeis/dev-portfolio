import styles from "./HeroImg.module.css"
import geisIcon from "../../../assets/icons/alex-character.png"

export const HeroImg = () => {

    return (
        <div className={styles.wrapper}>
            <img src={geisIcon} alt="alex geis icon image" className={styles.heroImg}/>
        </div>
    )
}