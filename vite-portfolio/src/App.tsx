// import { useState } from 'react'
import styles from './App.module.css'

import { NavBar } from "./components/NavBar";
import { Player } from "./pages/music/PlayerApp";
import { tracks } from "./assets/audio/audio";
import { Footer } from "./components/Footer";

type Props = {
	children?: React.ReactNode
};

export const AppTemplate: React.FC<Props> = ({ children }) => {
  return (
        <div className={styles.wrapper}>
          <NavBar />
          {children}
          <Player trackList={tracks} />
          <Footer />
        </div>
  )
}