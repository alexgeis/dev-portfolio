import styles from "./ProjectCardItem.module.css";

type ProjectCardItemProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ProjectCardItem = ({ onClick, tbd }: ProjectCardItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.projectCardItem} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
