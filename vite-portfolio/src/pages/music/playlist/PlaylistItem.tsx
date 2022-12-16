import styles from "./PlaylistItem.module.css";

type PlaylistItemProps = {
	status: string; 
	data_key: number; 
	src: string; 
	title: string;
	onClick?: React.MouseEventHandler;
}

export const PlaylistItem = ({ status, data_key, src, title, onClick }: PlaylistItemProps): JSX.Element => {
	return (
		<p
			className={`${styles.item} ${status === "active" ? styles.active : ""}`}
			data-key={data_key}
			data-src={src}
			title={title}
			onClick={onClick}
		>
			{title}
		</p>
	);
};
