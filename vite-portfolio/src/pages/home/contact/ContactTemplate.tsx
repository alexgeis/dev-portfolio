import styles from "./ContactTemplate.module.css";


export const ContactTemplate = () => {
	return <div className={styles.wrapper}>
				<h1 className={styles.contactTitle}>Have a project in mind?</h1>
				<p className={styles.contactDesc}>I'm available to work!</p>
				<p className={styles.contactBtn}>Contact Me</p>
		   </div>;
};
