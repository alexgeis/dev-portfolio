import styles from "./ProjectCardTemplate.module.css";

type Props = {
	children?: React.ReactNode;
};

export const ProjectCardTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
