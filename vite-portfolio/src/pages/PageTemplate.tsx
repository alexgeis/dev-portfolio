import styles from "./PageTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

// https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc

export const PageTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
