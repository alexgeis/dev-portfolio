import styles from "./HeroText.module.css";
import { NavLink } from "react-router-dom";

export const HeroText = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Hello!</h1>
			<h1>I'm Alex</h1>
			<div className={styles.aboutMe}>
				I
				<a
					href="https://github.com/alexgeis"
					target="_blank"
				>
					<span> build </span>
				</a>
				web apps,
				{/* <span> write </span>
				jokes,  */}
				<wbr></wbr>
				<a
					href="https://open.spotify.com/artist/41yri20ft220T9dx4A6mWa?si=-e-vKZuXSvqnzf3-7tIjDA"
					target="_blank"
				>
					<span> produce music</span>
				</a>
				, &#38;
				<span>
					<a
						href="https://www.instagram.com/ghosthopofficial/"
						target="_blank"
					>
						{" "}
						DJ w/ Ghosthop
					</a>
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
