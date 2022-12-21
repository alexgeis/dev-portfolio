import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ProjectCard = ({ onClick, tbd }: ProjectCardProps): JSX.Element => {
	return (
		<div
			className={`${styles.projectCard} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
