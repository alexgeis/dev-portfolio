// import { useState } from 'react'
import styles from './App.module.css'

import { Outlet } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

type Props = {
	children?: React.ReactNode
};

export const AppTemplate: React.FC<Props> = ({ children }) => {
  return (
        <div className={styles.wrapper}>
          <NavBar />
          {children}
          <Outlet />
          <Footer />
        </div>
  )
}