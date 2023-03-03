import pokemonProjectGif from "../../../assets/gifs/pokemon.gif";
import musicPlayerProjectGif from "../../../assets/gifs/music-player.gif";
import subTrackerProjectGif from "../../../assets/gifs/cache-bandit.gif";
import ghosthopProjectGif from "../../../assets/gifs/ghosthop.gif";
import pythonTechNewsGif from "../../../assets/gifs/python-tech-news.gif";
// import libraryProjectGif from "../../../assets/gifs/library.gif";

type ProjectDataObjProps = {
	imgSrc: string;
	title: string;
	descArr: string[];
	gitSrc: string;
	deployLink: string;
	orientation: "imgLeft" | "imgRight";
	techTags: string[];
};

export const projectData: ProjectDataObjProps[] = [
	{
		orientation: "imgLeft",
		imgSrc: pokemonProjectGif,
		title: "Pokémon Clone",
		descArr: [
			"Move through custom game map",
			"Collision / map boundaries",
			"Sprite animation",
			"Battle sequence w/ monsters",
			"Audio / sound FX",
			"and other features...",
		],
		gitSrc: "https://github.com/alexgeis/pokemon-game",
		deployLink: "https://mon-game.netlify.app/",
		techTags: ["JavaScript", "GSAP", "Tiled"],
	},
	{
		orientation: "imgRight",
		imgSrc: subTrackerProjectGif,
		title: "Cache Bandit (Subscription Tracker)",
		descArr: [
			"Login/signup",
			"Auth (node/express + bcrypt + MongoDB)",
			"Add/edit/delete subcriptions",
			"Light/dark theme toggle",
			"PWA download",
			"and more...",
		],
		gitSrc: "https://github.com/alexgeis/SubTracker",
		deployLink: "https://subtracker.up.railway.app/",
		techTags: ["JavaScript / React", "MongoDB", "Node / Express"],
	},
	{
		orientation: "imgLeft",
		imgSrc: musicPlayerProjectGif,
		title: "Browser Music Player",
		descArr: [
			"Genre tags",
			"Search filtering",
			"Time/volume controls",
			"Loop + Shuffle",
			"Playlist display",
			"and other features...",
		],
		gitSrc: "https://github.com/alexgeis/music-player",
		deployLink: "https://music-player-ang.netlify.app/",
		techTags: ["JavaScript / React"],
	},
	{
		orientation: "imgRight",
		imgSrc: pythonTechNewsGif,
		title: "Python Tech News",
		descArr: [
			"Built w/ Python",
			"Responsive design",
			"Jinja template rendering",
			"Flask back-end",
			"User auth w/ SQLAlchemy ORM",
			"and more...",
		],
		gitSrc: "https://github.com/alexgeis/ghosthop",
		deployLink: "https://ghosthop.vercel.app/",
		techTags: ["Python", "Flask", "SQLAlchemy", "Jinja"],
	},
	{
		orientation: "imgLeft",
		imgSrc: ghosthopProjectGif,
		title: "Ghosthop Website",
		descArr: [
			"Built with Next.js",
			"Emailjs Integration",
			"Spotify + Soundcloud embeds",
			"Jest Testing",
			"Fully Responsive",
			"and more...",
		],
		gitSrc: "https://github.com/alexgeis/ghosthop",
		deployLink: "https://ghosthop.vercel.app/",
		techTags: ["JavaScript / React", "Next.js", "Jest"],
	},
	// {
	//     imgSrc: libraryProjectGif,
	//     title: "Treat Your Shelf",
	//     descArr: ["Login/signup","Auth (node/express + bcrypt + SQL)","Add/delete books","Light/dark theme toggle","Read count progress bar","and other features..."],
	//     gitSrc: "https://github.com/alexgeis/library",
	//     deployLink: "https://github.com/alexgeis/library"
	// },
];
