import styles from "./NavBar.module.css"

import { NavLink } from "react-router-dom";

export function NavBar() {
    //TODO: update with better type
    const navLinkClickHandler = ({ currentTarget }: any) => {

        currentTarget.classList.add("active")
        // const tag: HTMLElement = e.currentTarget
        // if (!filter.includes(tag)) {
        //     setFilter([...filter, tag]);
        // } else {
        //     const filteredArray = filter.filter((item) => item !== tag);
        //     setFilter([...filteredArray]);
        // }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <a href="/" className={styles.logo}>
                     geis
                </a>
            </div>
            <div className={styles.nav}>
            {/* className={`${styles.navLink} ${status === "active" ? styles.active : ""}`} */}
                {/* <a className={styles.navLink} href="#projects">projects</a>
                <a className={styles.navLink} onClick={navLinkClickHandler} href="#music">music</a>
                <a className={styles.navLink} href="#contact">contact</a> */}
                <NavLink to="projects" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>projects</NavLink>
                <NavLink to="music" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>music</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>contact</NavLink>
            </div>
            <div className={styles.hamburger}></div>
        </div>
    )
}


            // {tags.map((tag, index) => {
            //     return (
            //         <TagItem
            //             key={index}
            //             status={
            //                 filter.length !== 0 && filter.includes(tag) ? "active" : ""
            //             }
            //             tag={tag}
            //             onClick={tagClickHandler}
            //         />
            //     );
            // })}