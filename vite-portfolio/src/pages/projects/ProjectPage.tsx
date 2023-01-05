import { useState, useEffect, useRef } from "react";

// tags
// import { TagsTemplate } from "../../components/tags/TagsTemplate";
// import { TagItem } from "../../components/tags/TagItem";

// search
import { Search } from "../../components/search/Search";

// projects
import { ProjectPageTemplate } from "./ProjectPageTemplate";
import { ProjectCardTemplate } from "./ProjectCardTemplate";
// import { ProjectItem } from "./ProjectItem"
import { ProjectCard } from "./ProjectCard";
import { ProjectCardItem } from "./ProjectCardItem";
import { projectPageData } from "./projectPageData";

// const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);
const fmtMSS = (s: number) =>
	new Date(1000 * s).toISOString().substring(15, 19);

export const ProjectPage = () => {
	const [query, updateQuery] = useState("");

	return (
		<ProjectPageTemplate>
			{/* TODO: add searchWrapper styling to search div */}
			{/* <div>
				<Search
					value={query}
					onChange={(e: any) => updateQuery(e.target.value.toLowerCase())}
					placeholder={`Search ${projectPageData.length} tracks...`}
				/>
			</div> */}
			<ProjectCardTemplate>
				{projectPageData.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							imgSrc={project.imgSrc}
							title={project.title}
							desc={project.desc}
							techTags={project.techTags}
							gitSrc={project.gitSrc}
							deployLink={project.deployLink}
						/>
					);
				})}
			</ProjectCardTemplate>
		</ProjectPageTemplate>
	);
};
