import ProjectImage1 from "../../../assets/gifs/pokemon.gif"
import ProjectImage2 from "../../../assets/img/screenshot.png"
import ProjectImage3 from "../../../assets/img/screenshot.png"

type ProjectDataObjProps = {
    imgSrc: string;
    title: string;
    descArr: string[];
    gitSrc: string;
    deployLink: string;
}

export const projectData: ProjectDataObjProps[] = [
    {
        imgSrc: ProjectImage1,
	    title: "Pokémon Clone",
	    descArr: ["Custom game map","Collision / map boundaries","Full movement","Sprite animation","Battle sequence w/ monsters","Random opponent attacks","Audio / sound FX","and other features..."],
	    gitSrc: "https://github.com/alexgeis/pokemon-game",
	    deployLink: "https://mon-game.netlify.app/"
    },
    {
        imgSrc: ProjectImage2,
	    title: "Project 2",
	    descArr: ["desc1","desc2","desc3","desc4","desc5","desc6","desc7","and other features..."],
	    gitSrc: "https://github.com/alexgeis/",
	    deployLink: "https://geis.netlify.app/"
    },
    {
        imgSrc: ProjectImage3,
	    title: "Project 3",
	    descArr: ["desc1","desc2","desc3","desc4","desc5","desc6","desc7","and other features..."],
	    gitSrc: "https://github.com/alexgeis/",
	    deployLink: "https://geis.netlify.app/"
    }
]