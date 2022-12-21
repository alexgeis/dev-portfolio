import styles from "./ProjectCard.module.css";
import ProjectImage from "../../../assets/img/screenshot.png"

type ProjectCardProps = {
	imgSrc: string;
	title: string;
	descArr: string[];
	gitSrc: string;
	deployLink: string;
}   

export const ProjectCard = ({ imgSrc, title, descArr, gitSrc, deployLink }: ProjectCardProps): JSX.Element => {

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
				<div className={styles.listWrapper}>
					{/* descArr */}
					{descArr.map((desc, index) => {
						return (
							<p 
							key={index}
							>
							{desc}
							</p>
						)
					})}
					{/* <p>Desc 1</p>
					<p>Desc 2</p>
					<p>Desc 3</p>
					<p>Desc 4</p>
					<p>Desc 5</p>
					<p>Desc 6</p>
					<p>Desc 7</p>
					<p>and other features...</p> */}
				</div>
				<div className={styles.btnWrapper}>
					<a href={gitSrc}>
						<button className={styles.projectCardSrcBtn}>Source</button>
					</a>
					<a href={deployLink}>
						<button className={styles.projectCardLiveBtn}>Live</button>
					</a>
				</div>
			</div>
		</div>
	);
};
