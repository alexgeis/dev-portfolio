import styles from "./HeroTemplate.module.css";

type Props = {
	children?: React.ReactNode
};

export const HeroTemplate: React.FC<Props> = ({ children }) => {
	return (
        <div className={styles.landingAreaWrapper}>
            <div className={styles.heroWrapper}>
                {children}
            </div>
        </div>
    )
};
