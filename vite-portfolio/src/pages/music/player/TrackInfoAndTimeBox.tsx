import styles from "./TrackInfoAndTimeBox.module.css";

type Props = {
	children?: React.ReactNode;
}

export const TrackInfoAndTimeBox: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
