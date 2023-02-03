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
