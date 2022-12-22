import { useState, useEffect, useRef } from "react";

// contact
import { ContactFormTemplate } from "./ContactFormTemplate";

// section title
import { SectionTitle } from "./sectionItems/SectionTitle";
import { SectionBtn } from "./sectionItems/SectionBtn";

// projects
import { ProjectTemplate } from "./projects/ProjectTemplate"
// import { ProjectItem } from "./projects/ProjectItem"
import { ProjectCard } from "./projects/ProjectCard"
import { ProjectCardItem } from "./projects/ProjectCardItem"
import { projectData } from "./projects/projectData";

// contact
import { ContactTemplate } from "./contact/ContactTemplate"
// import { ContactItem } from "./contact/ContactItem"
// icons
// import loopCurrentBtn from "../../assets/icons/player/loop_current.png";

// const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);
const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

export const ContactPage = () => {
    //PSEUDO
    // hero
    // projects
    // contact
    
    // props
    // projects - array of objects

	// const [isPlaying, setIsPlaying] = useState(false);

	return (
		<>
			<ContactFormTemplate>
                <p>hi</p>
            </ContactFormTemplate>
		</>
	);
};
