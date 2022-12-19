import { useState, useEffect, useRef } from "react";

import { PageTemplate } from "../PageTemplate";
// tags
import { TagsTemplate } from "./tags/TagsTemplate";
import { TagItem } from "./tags/TagItem";
// search
import { Search } from "./search/Search";
// player
import { PlayerTemplate } from "./player/PlayerTemplate";
import { TrackInfoAndTimeBox } from "./player/TrackInfoAndTimeBox";
import { TrackInfo } from "./player/TrackInfo";
import { Time } from "./player/Time";
import { Progress } from "./player/Progress";
import { ButtonsAndVolumeBox } from "./player/ButtonsAndVolumeBox";
import { ButtonsBox } from "./player/ButtonsBox";
import { Loop } from "./player/Loop";
import { Previous } from "./player/Previous";
import { Play } from "./player/Play";
import { Pause } from "./player/Pause";
import { Next } from "./player/Next";
import { Shuffle } from "./player/Shuffle";
import { Volume } from "./player/Volume";
// playlist
import { PlaylistTemplate } from "./playlist/PlaylistTemplate";
import { PlaylistItem } from "./playlist/PlaylistItem";
// player icons
import loopCurrentBtn from "../../assets/icons/loop_current.png";
import loopNoneBtn from "../../assets/icons/loop_none.png";
import previousBtn from "../../assets/icons/previous.png";
import playBtn from "../../assets/icons/play.png";
import pauseBtn from "../../assets/icons/pause.png";
import nextBtn from "../../assets/icons/next.png";
import shuffleAllBtn from "../../assets/icons/shuffle_all.png";
import shuffleNoneBtn from "../../assets/icons/shuffle_none.png";

// const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);
const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

type TrackListProps = {
	url: string;
	title: string;
	artist: string;
	album: string;
	tags: string[];
}
type TrackList = {
	trackList: TrackListProps[];
}

export const Player = ({ trackList }: TrackList) => {
	type Audio = {
		src?: string;
		volume?: number;
		currentTime?: number;
		duration: number;
		play?: any;
		pause?: any;
		addEventListener?: any;
	}
	const [audio, setAudio] = useState<Audio | null>(null);
	//TODO: better types for audio

	const [isPlaying, setIsPlaying] = useState(false);
	const [hasEnded, setHasEnded] = useState(false);
	const [title, setTitle] = useState("");
	const [artist, setArtist] = useState("");
	const [album, setAlbum] = useState("");
	const [length, setLength] = useState<number | undefined>(0);
	const [time, setTime] = useState<number | undefined>(0);
	const [slider, setSlider] = useState(1);
	const [drag, setDrag] = useState(0);
	const [volume, setVolume] = useState<number | undefined>(0.8);
	const [shuffled, setShuffled] = useState(false);
	const [looped, setLooped] = useState(false);

	// playlist
	let playlist: any[] = [];
	const [filter, setFilter] = useState([]);
	let [curTrack, setCurTrack] = useState(0);
	const [query, updateQuery] = useState("");
	// add all available tags to tags[]
	const tags: any[] = [];
	trackList.forEach((track: TrackListProps) => {
		track.tags.forEach((tag) => {
			if (!tags.includes(tag)) {
				tags.push(tag);
			}
		});
	});
	// create new Audio instance and update info
	useEffect(() => {
		const audio: Audio = new Audio(trackList[curTrack].url);

		const setAudioData = () => {
			setLength(audio.duration);
			setTime(audio.currentTime);
		};

		const setAudioTime = () => {
			const curTime: number | undefined = audio.currentTime;
			setTime(curTime);
			
			const curDuration: number | undefined  = audio.duration;
			const sliderPos: any = curTime && curDuration 
					? ((curTime * 100) / curDuration).toFixed(1) 
					: 0
			//TODO: better type for sliderPos
			setSlider(sliderPos);
		};

		const setAudioVolume = () => setVolume(audio.volume);

		const setAudioEnd = () => setHasEnded(!hasEnded);

		audio.addEventListener("loadeddata", setAudioData);
		audio.addEventListener("timeupdate", setAudioTime);
		audio.addEventListener("volumechange", setAudioVolume);
		audio.addEventListener("ended", setAudioEnd);

		setAudio(audio);
		setTitle(trackList[curTrack].title);
		setArtist(trackList[curTrack].artist);
		setAlbum(trackList[curTrack].album);

		return () => {
			audio.pause();
		};
	}, []);
	// using curTrack as a useEffect dependency, update audio source and title
	useEffect(() => {
		if (audio != null) {
			audio.src = trackList[curTrack].url;
			setTitle(trackList[curTrack].title);
			play();
		}
	}, [curTrack]);
	// using hasEnded as a useEffect dependency, update playlist, if shuffled, or loop song, if active
	useEffect(() => {
		if (audio != null) {
			if (shuffled) {
				playlist = shufflePlaylist(playlist);
			}
			!looped ? next() : play();
		}
	}, [hasEnded]);
	// using volume as a useEffect dependency, update audio volume
	useEffect(() => {
		if (audio != null) {
			audio.volume = volume;
		}
	}, [volume]);
	// using drag as a useEffect dependency, update audio time to match drag position
	useEffect(() => {
		if (audio != null) {
			pause();
			const val = Math.round((drag * audio.duration) / 100);
			audio.currentTime = val;
		}
	}, [drag]);
	// using filter as a useEffect dependency, update audio track to the first within the newly filtered playlist
	useEffect(() => {
		if (!playlist.includes(curTrack)) {
			setCurTrack((curTrack = playlist[0]));
		}
	}, [filter]);

	const loop = () => {
		setLooped(!looped);
	};

	const previous = () => {
		const index = playlist.indexOf(curTrack);
		index !== 0
			? setCurTrack((curTrack = playlist[index - 1]))
			: setCurTrack((curTrack = playlist[playlist.length - 1]));
	};

	const play = () => {
		if (audio != null) {
			setIsPlaying(true);
			audio.play();
		}
	};

	const pause = () => {
		if (audio != null) {
			setIsPlaying(false);
			audio.pause();
		}
	};

	const next = () => {
		const index = playlist.indexOf(curTrack);
		index !== playlist.length - 1
			? setCurTrack((curTrack = playlist[index + 1]))
			: setCurTrack((curTrack = playlist[0]));
	};

	const shuffle = () => {
		setShuffled(!shuffled);
	};

	const shufflePlaylist = (arr) => {
		if (arr.length === 1) return arr;
		const rand = Math.floor(Math.random() * arr.length);
		return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i !== rand))];
	};

	const tagClickHandler = (e) => {
		const tag = e.currentTarget.innerHTML;
		if (!filter.includes(tag)) {
			setFilter([...filter, tag]);
		} else {
			const filteredArray = filter.filter((item) => item !== tag);
			setFilter([...filteredArray]);
		}
	};

	const playlistItemClickHandler = (e) => {
		const num = Number(e.currentTarget.getAttribute("data-key"));
		const index = playlist.indexOf(num);
		setCurTrack((curTrack = playlist[index]));
		play();
	};

	return (
		<PageTemplate>
			<TagsTemplate>
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
				onChange={(e) => updateQuery(e.target.value.toLowerCase())}
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
					onChange={(e) => {
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
						onChange={(e) => {
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
			</PlaylistTemplate>
		</PageTemplate>
	);
};
