import styles from "./ProjectCard.module.css";
import ProjectImage from "../../../assets/img/screenshot.png";
import checkMark from "../../../assets/icons/check-mark.png";

type ProjectCardProps = {
	imgSrc: string;
	title: string;
	descArr: string[];
	gitSrc: string;
	deployLink: string;
	techTags: string[];
	orientation: string;
};

export const ProjectCard = ({
	imgSrc,
	title,
	descArr,
	gitSrc,
	deployLink,
	techTags,
	orientation,
}: ProjectCardProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			{orientation === "imgLeft" ? (
				<>
					<div className={styles.imageWrapper}>
						<a
							href={deployLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
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
						<div className={styles.listWrapper}>
							{descArr.map((desc, index) => {
								return (
									<p key={index}>
										<span className={styles.checkmark}>&#10003;</span>&nbsp;
										{desc}
									</p>
								);
							})}
						</div>
						<div className={styles.btnWrapper}>
							<a href={gitSrc}>
								<button className={styles.projectCardSrcBtn}>Source</button>
							</a>
							<a href={deployLink}>
								<button className={styles.projectCardLiveBtn}>Live</button>
							</a>
						</div>
						<div className={styles.techWrapper}>
							<h3>Built with</h3>
							<div className={styles.techListWrapper}>
								{techTags.map((tech, index) => {
									return (
										<p
											key={index}
											className={styles.techListItem}
										>
											{tech}
										</p>
									);
								})}
							</div>
						</div>
					</div>{" "}
				</>
			) : (
				<>
					<div
						className={`${styles.infoWrapper} ${styles.flipOrientationInfo}`}
						id="leftInfo"
					>
						<h1>{title}</h1>
						<div className={styles.listWrapper}>
							{descArr.map((desc, index) => {
								return (
									<p key={index}>
										<span className={styles.checkmark}>&#10003;</span>&nbsp;
										{desc}
									</p>
								);
							})}
						</div>
						<div className={styles.btnWrapper}>
							<a href={gitSrc}>
								<button className={styles.projectCardSrcBtn}>Source</button>
							</a>
							<a href={deployLink}>
								<button className={styles.projectCardLiveBtn}>Live</button>
							</a>
						</div>
						<div className={styles.techWrapper}>
							<h3>Built with</h3>
							<div className={styles.techListWrapper}>
								{techTags.map((tech, index) => {
									return (
										<p
											key={index}
											className={styles.techListItem}
										>
											{tech}
										</p>
									);
								})}
							</div>
						</div>
					</div>

					<div
						className={`${styles.imageWrapper} ${styles.flipOrientationImg}`}
						id="rightImg"
					>
						<a
							href={deployLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<img
									src={imgSrc}
									alt={`${title} Project Image`}
									className={styles.cardImage}
								/>
							</span>
						</a>
					</div>
				</>
			)}
		</div>
	);
};
