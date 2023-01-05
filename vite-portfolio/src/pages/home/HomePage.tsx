import { useState, useEffect, useRef } from "react";

// hero
import { HeroTemplate } from "./hero/HeroTemplate";
import { HeroText } from "./hero/HeroText";
import { HeroImg } from "./hero/HeroImg";

// section title
import { SectionTitle } from "./sectionItems/SectionTitle";
import { SectionBtn } from "./sectionItems/SectionBtn";

// projects
import { ProjectTemplate } from "./projects/ProjectTemplate";
// import { ProjectItem } from "./projects/ProjectItem"
import { ProjectCard } from "./projects/ProjectCard";
// import { ProjectCardItem } from "./projects/ProjectCardItem"
import { projectData } from "./projects/projectData";

// contact
import { ContactTemplate } from "./contact/ContactTemplate";
// import { ContactItem } from "./contact/ContactItem"
// icons
// import loopCurrentBtn from "../../assets/icons/player/loop_current.png";

// const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);
const fmtMSS = (s: number) =>
	new Date(1000 * s).toISOString().substring(15, 19);

export const HomePage = () => {
	return (
		<>
			<HeroTemplate>
				<HeroText />
				<HeroImg />
			</HeroTemplate>

			<SectionTitle title="Featured Projects" />
			<ProjectTemplate>
				{projectData.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							imgSrc={project.imgSrc}
							title={project.title}
							descArr={project.descArr}
							gitSrc={project.gitSrc}
							deployLink={project.deployLink}
							orientation={project.orientation}
						/>
					);
				})}
			</ProjectTemplate>
			<SectionBtn
				title="View All Projects"
				to="projects"
			/>

			<ContactTemplate />
		</>
	);
};
