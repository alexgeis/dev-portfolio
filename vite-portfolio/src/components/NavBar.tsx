import styles from "./NavBar.module.css"

export function NavBar() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="../vite.svg" className={styles.logo} alt="Vite logo" />
                </a>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li><a href="#projects"></a></li>
                    <li><a href="#music"></a></li>
                    <li><a href="#contact"></a></li>
                </ul>
            </div>
            <div className={styles.hamburger}></div>
        </div>
    )
}