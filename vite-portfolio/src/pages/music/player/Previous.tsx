import styles from "./Previous.module.css";

type PreviousProps = {
	src: string;
	onClick?: React.MouseEventHandler
}

export const Previous = ({ src, onClick }: PreviousProps): JSX.Element => {
	return (
		<img
			className={styles.previous}
			src={src}
			onClick={onClick}
			alt="previous song icon"
		/>
	);
};
