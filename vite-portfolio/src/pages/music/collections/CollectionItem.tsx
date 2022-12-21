import styles from "./CollectionItem.module.css";

type CollectionItemProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any
}

export const CollectionItem = ({ onClick, tbd}: CollectionItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.collectionItem} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
