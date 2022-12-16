import styles from "./PlaylistTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const PlaylistTemplate: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
