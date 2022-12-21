import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
    title: string;
}

export const SectionTitle = ({title}: SectionTitleProps): JSX.Element => {
	return (
		<div
			className={styles.wrapper}
		>
            <h1 className={styles.title}>{title}</h1>
		</div>
	);
};
