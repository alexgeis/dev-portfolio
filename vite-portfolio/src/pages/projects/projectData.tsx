import pokemonProjectGif from "../../../assets/gifs/pokemon.gif"
import musicPlayerProjectGif from "../../../assets/gifs/music-player.gif"
import libraryProjectGif from "../../../assets/gifs/library.gif"

type ProjectDataObjProps = {
    imgSrc: string;
    title: string;
    desc: string
    deployLink: string;
}

export const projectData: ProjectDataObjProps[] = [
    {
        imgSrc: pokemonProjectGif,
	    title: "Pokémon Clone",
        desc: "project description in a few words",
	    deployLink: "https://mon-game.netlify.app/"
    },
    {
        imgSrc: musicPlayerProjectGif,
	    title: "Browser Music Player",
        desc: "project description in a few words",
	    deployLink: "https://music-player-ang.netlify.app/"
    },
    {
        imgSrc: libraryProjectGif,
	    title: "Treat Your Shelf",
        desc: "project description in a few words",
	    deployLink: "https://github.com/alexgeis/library"
    }
]