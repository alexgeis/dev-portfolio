import styles from "./ProjectTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const ProjectTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
