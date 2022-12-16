import styles from "./TagItem.module.css";

type TagItemProps = {
	status: string;
	onClick?: React.MouseEventHandler;
	tag: any;
}

export const TagItem = ({ status, onClick, tag }: TagItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.tag} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tag}
		</div>
	);
};
