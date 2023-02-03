import styles from "./ScrollToTop.module.css";
import { useState, useEffect } from "react";
import slideUpArrow from "../assets/icons/scrollToTop/slide-up-white.png";

export default function ScrollToTop() {
	const [btnShow, setBtnShow] = useState<boolean>(false);

	useEffect(() => {
		const handleScrollBtnShow = () => {
			window.scrollY > 100 ? setBtnShow(true) : setBtnShow(false);
		};

		window.addEventListener("scroll", handleScrollBtnShow);

		return () => {
			window.removeEventListener("scroll", handleScrollBtnShow);
		};
	}, []);

	function handleScrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	return (
		<>
			{btnShow && (
				<button
					onClick={handleScrollToTop}
					id="myBtn"
					className={styles.myBtn}
					title="Go to top"
				>
					<img
						src={slideUpArrow}
						alt="scroll to top arrow"
					/>
				</button>
			)}
		</>
	);
}
