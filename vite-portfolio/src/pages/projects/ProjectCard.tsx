import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
	imgSrc: string;
	title: string;
	desc: string;
	techTags?: string[];
	gitSrc: string;
	deployLink: string;
};

export const ProjectCard = ({
	imgSrc,
	title,
	desc,
	techTags,
	gitSrc,
	deployLink,
}: ProjectCardProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.imageWrapper}>
				<a
					href={deployLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className={styles.imageSPANWrapper}>
						<img
							src={imgSrc}
							alt={`${title} Project Image`}
							className={styles.cardImage}
						/>
					</span>
				</a>
			</div>

			<div className={styles.infoWrapper}>
				<h1>{title}</h1>
				<p>{desc}</p>
				<div className={styles.btnWrapper}>
					<a
						href={gitSrc}
						target="_blank"
					>
						<button className={styles.projectCardSrcBtn}>Source</button>
					</a>
					<a
						href={deployLink}
						target="_blank"
					>
						<button className={styles.projectCardLiveBtn}>Live</button>
					</a>
				</div>
			</div>
		</div>
	);
};
