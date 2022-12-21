import styles from "./ScrollToTop.module.css";
import slideUpArrow from "../assets/icons/scrollToTop/slide-up-white.png"


export const ScrollToTop = () => {
	return <div className={styles.wrapper}>
				<img src={slideUpArrow} alt="slide up arrow" />
		   </div>;
};
