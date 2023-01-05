import pokemonProjectGif from "../../../assets/gifs/pokemon.gif";
import musicPlayerProjectGif from "../../../assets/gifs/music-player.gif";
import libraryProjectGif from "../../../assets/gifs/library.gif";
import subTrackerProjectGif from "../../../assets/gifs/cache-bandit.gif";

type ProjectPageDataObjProps = {
	imgSrc: string;
	title: string;
	desc: string;
	techTags: string[];
	gitSrc: string;
	deployLink: string;
};

export const projectPageData: ProjectPageDataObjProps[] = [
	{
		imgSrc: pokemonProjectGif,
		title: "Pokémon Clone",
		desc: "project description in a few words",
		techTags: ["JavaScript"],
		gitSrc: "https://github.com/alexgeis/pokemon-game",
		deployLink: "https://mon-game.netlify.app/",
	},
	{
		imgSrc: subTrackerProjectGif,
		title: "Cache Bandit (Subscription Tracker)",
		desc: "Manage and budget ongoing subscriptions",
		techTags: ["JavaScript", "React", "Webpack", "MongoDB"],
		gitSrc: "https://github.com/alexgeis/SubTracker",
		deployLink: "https://subtracker.up.railway.app/",
	},
	{
		imgSrc: musicPlayerProjectGif,
		title: "Browser Music Player",
		desc: "project description in a few words",
		techTags: ["JavaScript", "React"],
		gitSrc: "https://github.com/alexgeis/music-player",
		deployLink: "https://music-player-ang.netlify.app/",
	},
	{
		imgSrc: libraryProjectGif,
		title: "Treat Your Shelf",
		desc: "project description in a few words",
		techTags: ["JavaScript", "MySQL"],
		gitSrc: "https://github.com/alexgeis/library",
		deployLink: "https://github.com/alexgeis/library",
	},
];
