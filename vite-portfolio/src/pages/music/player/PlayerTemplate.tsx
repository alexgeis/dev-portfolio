import styles from "./PlayerTemplate.module.css";

type Props = {
	children?: React.ReactNode;
}

export const PlayerTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
