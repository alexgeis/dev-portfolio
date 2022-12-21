import styles from "./HeroText.module.css"

export const HeroText = () => {

    return (
        <div className={styles.wrapper}>
            <h1>Alex</h1>
            <div className={styles.aboutMe}>
                I
                <span> build </span>
                stuff,
                <span> create </span>
                other things,
                and
                <span> produce </span>
                music as a hobby
            </div>
            <div className={styles.heroBtns}>
                <p className={styles.heroProjectsBtn}>My Projects</p>
                <p className={styles.heroContactBtn}>Get in Touch</p>
            </div>
        </div>
    )
}