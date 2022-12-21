import styles from "./ContactTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const ContactTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
