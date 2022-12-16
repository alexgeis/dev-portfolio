import styles from "./TrackInfo.module.css";

type TrackInfoProps = {
	title: string;
	artist: string;
	album: string;
}

export const TrackInfo = ({ title, artist = "", album = "" }: TrackInfoProps): JSX.Element => {
	return (
		<div className={styles.trackInfoWrapper}>
			<h1 className={styles.title}>{title}</h1>
			<h1 className={styles.artist}>{artist}</h1>
			<h1 className={styles.album}>{album}</h1>
		</div>
	);
};
