import styles from "./Play.module.css";

type PlayProps = {
	src: string;
	onClick?: React.MouseEventHandler;
}

export const Play = ({ src, onClick }: PlayProps): JSX.Element => {
	return (
		<img
			className={styles.play}
			src={src}
			onClick={onClick}
			alt="play music icon"
		/>
	);
};
