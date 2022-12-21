import styles from "./ProjectItem.module.css";

type ProjectItemProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ProjectItem = ({ onClick, tbd }: ProjectItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.projectItem} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
