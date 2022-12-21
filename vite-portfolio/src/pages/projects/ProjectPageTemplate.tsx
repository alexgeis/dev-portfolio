import styles from "./ProjectPageTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const ProjectPageTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
