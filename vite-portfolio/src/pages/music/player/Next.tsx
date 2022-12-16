import styles from "./Next.module.css";

type NextProps = {
	src: string;
	onClick?: React.MouseEventHandler;
}

export const Next = ({ src, onClick }: NextProps): JSX.Element => {
	return (
		<img
			className={styles.next}
			src={src}
			onClick={onClick}
			alt="next music icon"
		/>
	);
};
