import pokemonProjectGif from "../../../assets/gifs/pokemon.gif"
import musicPlayerProjectGif from "../../../assets/gifs/music-player.gif"
import libraryProjectGif from "../../../assets/gifs/library.gif"

type ProjectDataObjProps = {
    imgSrc: string;
    title: string;
    descArr: string[];
    gitSrc: string;
    deployLink: string;
}

export const projectData: ProjectDataObjProps[] = [
    {
        imgSrc: pokemonProjectGif,
	    title: "Pokémon Clone",
	    descArr: ["Move through custom game map","Collision / map boundaries","Sprite animation","Battle sequence w/ monsters","Audio / sound FX","and other features..."],
	    gitSrc: "https://github.com/alexgeis/pokemon-game",
	    deployLink: "https://mon-game.netlify.app/"
    },
    {
        imgSrc: musicPlayerProjectGif,
	    title: "Browser Music Player",
	    descArr: ["Genre tags","Search filtering","Time/volume controls","Loop + Shuffle","Playlist display","and other features..."],
	    gitSrc: "https://github.com/alexgeis/music-player",
	    deployLink: "https://music-player-ang.netlify.app/"
    },
    {
        imgSrc: libraryProjectGif,
	    title: "Treat Your Shelf",
	    descArr: ["Login/signup","Auth (node/express + bcrypt + SQL)","Add/delete books","Light/dark theme toggle","Read count progress bar","and other features..."],
	    gitSrc: "https://github.com/alexgeis/library",
	    deployLink: "https://github.com/alexgeis/library"
    }
]