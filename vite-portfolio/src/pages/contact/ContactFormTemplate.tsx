import styles from "./ContactFormTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const ContactFormTemplate: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			{children}
		</div>
	)
};
