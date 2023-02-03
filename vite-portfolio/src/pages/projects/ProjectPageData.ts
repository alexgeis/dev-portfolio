import pokemonProjectGif from "../../assets/gifs/pokemon.gif";
import musicPlayerProjectGif from "../../assets/gifs/music-player.gif";
import libraryProjectGif from "../../assets/gifs/library.gif";
import subTrackerProjectGif from "../../assets/gifs/cache-bandit.gif";
import todoAppGif from "../../assets/gifs/todo-app.gif";
import passGenGif from "../../assets/gifs/password-generator.gif";
import weatherDashGif from "../../assets/gifs/weather-dashboard.gif";
import etchSketchGif from "../../assets/gifs/etch-a-sketch.gif";
import ghosthopProjectGif from "../../assets/gifs/ghosthop.gif";

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
		desc: "Gotta catch 'em all (in the browser)",
		techTags: ["JavaScript"],
		gitSrc: "https://github.com/alexgeis/pokemon-game",
		deployLink: "https://mon-game.netlify.app/",
	},
	{
		imgSrc: subTrackerProjectGif,
		title: "Cache Bandit",
		desc: "Manage and budget ongoing subscriptions",
		techTags: ["JavaScript", "React", "Webpack", "MongoDB"],
		gitSrc: "https://github.com/alexgeis/SubTracker",
		deployLink: "https://subtracker.up.railway.app/",
	},
	{
		imgSrc: musicPlayerProjectGif,
		title: "Music Player",
		desc: "Browser audio player",
		techTags: ["JavaScript", "React"],
		gitSrc: "https://github.com/alexgeis/music-player",
		deployLink: "https://music-player-ang.netlify.app/",
	},
	{
		imgSrc: ghosthopProjectGif,
		title: "Ghosthop Website",
		desc: "Official artist page of DJs Ghosthop",
		techTags: ["JavaScript", "CSS", "Next.js", "React"],
		gitSrc: "https://github.com/alexgeis/ghosthop",
		deployLink: "https://ghosthop.vercel.app/",
	},
	{
		imgSrc: todoAppGif,
		title: "To-do App",
		desc: "Task tracking application",
		techTags: ["JavaScript", "CSS"],
		gitSrc: "https://github.com/alexgeis/todo-list",
		deployLink: "alexgeis.github.io/todo-list/",
	},
	{
		imgSrc: libraryProjectGif,
		title: "Treat Your Shelf",
		desc: "Bookshelf storage app",
		techTags: ["JavaScript", "MySQL"],
		gitSrc: "https://github.com/alexgeis/library",
		deployLink: "https://github.com/alexgeis/library",
	},
	{
		imgSrc: passGenGif,
		title: "Password Generator",
		desc: "Create a custom password",
		techTags: ["JavaScript"],
		gitSrc: "https://github.com/alexgeis/JS-Password-Generator",
		deployLink: "alexgeis.github.io/JS-Password-Generator/",
	},
	{
		imgSrc: weatherDashGif,
		title: "API Weather Dashboard",
		desc: "Display weather info from OpenWeatherAPI",
		techTags: ["JavaScript", "API"],
		gitSrc: "https://github.com/alexgeis/Weather-Dashboard",
		deployLink: "alexgeis.github.io/Weather-Dashboard/",
	},
	{
		imgSrc: etchSketchGif,
		title: "Etch-a-Sketch",
		desc: "Browser drawing tool",
		techTags: ["JavaScript"],
		gitSrc: "https://github.com/alexgeis/Etch-a-Sketch",
		deployLink: "https://alexgeis.github.io/Etch-a-Sketch/",
	},
];
