import styles from "./Progress.module.css";

type ProgressProps = {
	value: number;
	onChange?: any; //TODO: better data type for these mouse events
	onMouseUp?: any;
	onTouchEnd?: any;
};

export const Progress = ({ value, onChange, onMouseUp, onTouchEnd }: ProgressProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<input
				type="range"
				min="1"
				max="100"
				step="1"
				value={value}
				className={styles.slider}
				id="myRange"
				onChange={onChange}
				onMouseUp={onMouseUp}
				onTouchEnd={onTouchEnd}
				style={{
					background: `linear-gradient(90deg, var(--progressUsed) ${Math.floor(
						value
					)}%, var(--progressLeft) ${Math.floor(value)}%)`,
				}}
			/>
		</div>
	);
};
