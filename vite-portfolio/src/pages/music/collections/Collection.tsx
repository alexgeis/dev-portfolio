import styles from "./Collection.module.css";

type CollectionProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any
}

export const Collection = ({ onClick, tbd}: CollectionProps): JSX.Element => {
	return (
		<div
			className={`${styles.collection} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
