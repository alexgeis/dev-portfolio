import styles from "./HeroText.module.css";
import { NavLink } from "react-router-dom";

export const HeroText = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Hello!</h1>
			<h1>I'm Alex</h1>
			<div className={styles.aboutMe}>
				I
				<a href="https://github.com/alexgeis">
					<span> build </span>
				</a>
				web apps and
				{/* <span> write </span>
				jokes,  */}
				<a href="https://open.spotify.com/artist/41yri20ft220T9dx4A6mWa?si=-e-vKZuXSvqnzf3-7tIjDA">
					<span> produce music </span>
				</a>
				/
				<span>
					<a href="https://www.instagram.com/ghosthopofficial/"> DJ</a>
				</span>
			</div>
			<div className={styles.heroBtns}>
				<NavLink to="projects">
					<p className={styles.heroProjectsBtn}>My Projects</p>
				</NavLink>
				<NavLink to="contact">
					<p className={styles.heroContactBtn}>Get in Touch</p>
				</NavLink>
			</div>
		</div>
	);
};
