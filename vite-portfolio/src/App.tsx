// import { useState } from 'react'
import styles from "./App.module.css";

import { Outlet } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

type Props = {
	children?: React.ReactNode;
};

export const AppTemplate: React.FC<Props> = ({ children }) => {
	/* Scroll animation */
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					entry.target.classList.add("scroll-animation-show");
				} else {
					entry.target.classList.remove("scroll-animation-show");
				}
			});
		},
		{ threshold: 0.2 }
	);

	const animationItemsEl = document.querySelectorAll(".scroll-animation-hide");
	animationItemsEl.forEach((animationItem) => {
		observer.observe(animationItem);
	});
	/* Scroll animation end */
	return (
		<div className={styles.wrapper}>
			<NavBar />
			<ScrollToTop />
			{children}
			<Outlet />
			<div className={styles.spacer}></div>
			<Footer />
		</div>
	);
};
