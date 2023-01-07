import styles from "./ContactTemplate.module.css";
import { NavLink } from "react-router-dom";

export const ContactTemplate = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.contactTitle}>Let's start our next project</h1>
			<p className={styles.contactDesc}>I'm available to work!</p>
			<NavLink to="contact">
				<p className={styles.contactBtn}>Contact Me</p>
			</NavLink>
		</div>
	);
};
