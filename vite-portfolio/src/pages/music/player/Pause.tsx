import styles from "./Pause.module.css";

type PauseProps = {
	src: string;
	onClick?: React.MouseEventHandler;
}

export const Pause = ({ src, onClick }: PauseProps): JSX.Element => {
	return (
		<img
			className={styles.pause}
			src={src}
			onClick={onClick}
			alt="pause music icon"
		/>
	);
};
