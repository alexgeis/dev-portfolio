import styles from "./ButtonsAndVolumeBox.module.css";

type Props = {
	children?: React.ReactNode;
}

export const ButtonsAndVolumeBox: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
