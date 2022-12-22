import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
	imgSrc: string;
	title: string;
	deployLink: string;
}   

export const ProjectCard = ({ imgSrc, title, deployLink }: ProjectCardProps): JSX.Element => {
	return (
		<div
			className={styles.wrapper}
		>
			<div className={styles.imageWrapper}>
				<a href={deployLink} target="_blank" rel="noopener noreferrer">
					<span>
						<img src={imgSrc} alt={`${title} Project Image`} 
						className={styles.cardImage}
						/>
					</span>
				</a>
			</div>

			<div className={styles.infoWrapper}>
				<h1>{title}</h1>
				<div className={styles.btnWrapper}>
					<a href={deployLink}>
						<button className={styles.projectCardLiveBtn}>Live</button>
					</a>
				</div>
			</div>
		</div>
	);
};
