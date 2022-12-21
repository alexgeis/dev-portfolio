import { useState } from 'react';
import styles from "./NavBar.module.css"

import { NavLink } from "react-router-dom";

export function NavBar() {
    const [hamOpen, setHamOpen] = useState(false);

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

    const hamburgerMenuClickHandler = () => {
        setHamOpen(!hamOpen)


    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <a href="/" className={styles.logo}>
                     geis
                </a>
            </div>
            <div className={styles.nav}>
                <NavLink to="projects" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>projects</NavLink>
                <NavLink to="music" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>music</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>contact</NavLink>
            </div>
            <div className={styles.hamburgerWrapper}>
                <div className={styles.hamburgerBox} onClick={hamburgerMenuClickHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.hamburgerMenu}>
                    <NavLink to="projects" className={({ isActive }) => isActive ? styles.hamburgerLinkActive : styles.hamburgerLink}>projects</NavLink>
                    <NavLink to="music" className={({ isActive }) => isActive ? styles.hamburgerLinkActive : styles.hamburgerLink}>music</NavLink>
                    <NavLink to="contact" className={({ isActive }) => isActive ? styles.hamburgerLinkActive : styles.hamburgerLink}>contact</NavLink>
                </div>
            </div>
        </div>
    )
}