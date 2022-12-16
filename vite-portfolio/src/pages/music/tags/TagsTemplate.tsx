import styles from "./TagsTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const TagsTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
