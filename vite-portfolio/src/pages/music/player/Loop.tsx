import styles from "./Loop.module.css";

type LoopProps = {
	src: string;
	onClick?: React.MouseEventHandler;
};

export const Loop = ({ src, onClick }: LoopProps): JSX.Element => {
	return (
		<img
			className={styles.loop}
			src={src}
			onClick={onClick}
			alt="loop music icon"
		/>
	);
};
