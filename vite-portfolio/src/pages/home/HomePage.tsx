import { useState, useEffect, useRef } from "react";

// hero
import { HeroTemplate } from "./hero/HeroTemplate";
import { HeroText } from "./hero/HeroText";
import { HeroImg } from "./hero/HeroImg";

// projects
// import { ProjectTemplate } from "./projects/ProjectTemplate"
// import { ProjectItem } from "./projects/ProjectItem"
// import { ProjectCard } from "./projects/ProjectCard"
// import { ProjectCardItem } from "./projects/ProjectCardItem"

// contact
// import { ContactTemplate } from "./contact/ContactTemplate"
// import { ContactItem } from "./contact/ContactItem"
// icons
// import loopCurrentBtn from "../../assets/icons/player/loop_current.png";

// const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);
const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

export const HomePage = () => {
    //PSEUDO
    // hero
    // projects
    // contact
    
    // props
    // projects - array of objects

	// const [isPlaying, setIsPlaying] = useState(false);

	return (
		<>
			<HeroTemplate>
				<HeroText/>
				<HeroImg/>
			</HeroTemplate>
			{/* <TagsTemplate>
				{tags.map((tag, index) => {
					return (
						<TagItem
							key={index}
							status={
								filter.length !== 0 && filter.includes(tag) ? "active" : ""
							}
							tag={tag}
							onClick={tagClickHandler}
						/>
					);
				})}
			</TagsTemplate>
			<Search
				value={query}
				onChange={(e: any) => updateQuery(e.target.value.toLowerCase())}
				placeholder={`Search ${trackList.length} tracks...`}
			/>
			<PlayerTemplate>
				<TrackInfoAndTimeBox>
					<TrackInfo title={title} artist={artist} album={album} />
					<Time
						time={`${!time ? "0:00" : fmtMSS(time)}/${
							!length ? "0:00" : fmtMSS(length)
						}`}
					/>
				</TrackInfoAndTimeBox>
				<Progress
					value={slider}
					onChange={(e: any) => {
						setSlider(e.target.value);
						setDrag(e.target.value);
					}}
					onMouseUp={play}
					onTouchEnd={play}
				/>
				<ButtonsAndVolumeBox>
					<ButtonsBox>
						<Loop src={looped ? loopCurrentBtn : loopNoneBtn} onClick={loop} />
						<Previous src={previousBtn} onClick={previous} />
						{isPlaying ? (
							<Pause src={pauseBtn} onClick={pause} />
						) : (
							<Play src={playBtn} onClick={play} />
						)}
						<Next src={nextBtn} onClick={next} />
						<Shuffle
							src={shuffled ? shuffleAllBtn : shuffleNoneBtn}
							onClick={shuffle}
						/>
					</ButtonsBox>
					<Volume
						value={volume}
						onChange={(e: any) => {
							setVolume(e.target.value / 100);
						}}
					/>
				</ButtonsAndVolumeBox>
			</PlayerTemplate>
			<PlaylistTemplate>
				{trackList
					.sort((a, b) => (a.title > b.title ? 1 : -1))
					.map((el, index) => {
						if (
							filter.length === 0 ||
							filter.some((filter) => el.tags.includes(filter))
						) {
							if (el.title.toLowerCase().includes(query.toLowerCase())) {
								playlist.push(index);
								return (
									<PlaylistItem
										status={curTrack === index ? "active" : ""}
										key={index}
										data_key={index}
										title={el.title}
										src={el.url}
										onClick={playlistItemClickHandler}
									/>
								);
							}
						}
					})}
			</PlaylistTemplate> */}
		</>
	);
};
