import styles from "./NavBar.module.css"

export function NavBar() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <a href="/" className={styles.logo}>
                    {/* <img src="../vite.svg" className={styles.logo} alt="Vite logo" /> */}
                     geis
                </a>
            </div>
            <div className={styles.nav}>
                <a className={styles.navLink} href="#projects">projects</a>
                <a className={styles.navLink} href="#music">music</a>
                <a className={styles.navLink} href="#contact">contact</a>
            </div>
            <div className={styles.hamburger}></div>
        </div>
    )
}