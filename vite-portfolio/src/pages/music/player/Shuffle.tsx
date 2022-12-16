import styles from "./Shuffle.module.css";

type ShuffleProps = {
	src: string;
	onClick?: React.MouseEventHandler;
}

export const Shuffle = ({ src, onClick }: ShuffleProps): JSX.Element => {
	return (
		<img
			className={styles.shuffle}
			src={src}
			onClick={onClick}
			alt="shuffle music icon"
		/>
	);
};
