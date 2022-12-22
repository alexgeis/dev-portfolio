import { useState, useEffect, useRef } from "react";

// tags
// search
import { Search } from "../../components/search/Search";

// projects
import { ProjectPageTemplate } from "./ProjectPageTemplate"
// import { ProjectItem } from "./ProjectItem"
import { ProjectCard } from "./ProjectCard"
import { ProjectCardItem } from "./ProjectCardItem"
import { projectData } from "./projectData";

// const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);
const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

export const HomePage = () => {
    const [query, updateQuery] = useState("");

	return (
		<>
            <Search 
                value={query} 
                onChange={(e: any) => updateQuery(e.target.value.toLowerCase())}
                placeholder={`Search ${projectData.length} tracks...`}/>
			<ProjectPageTemplate>
				{projectData.map((project, index) => {
					return (
						<ProjectCard 
						key={index}
						imgSrc={project.imgSrc}
						title={project.title}
                        desc={project.desc}
						deployLink={project.deployLink}
						/>
					)
				})}
			</ProjectPageTemplate>
		</>
	);
};
