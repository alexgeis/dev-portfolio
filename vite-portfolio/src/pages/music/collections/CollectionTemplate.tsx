import styles from "./CollectionTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const CollectionTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
