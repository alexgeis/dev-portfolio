import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Player } from "./pages/music/PlayerApp";
import { tracks } from "./assets/audio/audio.js";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Player trackList={tracks} />
  </React.StrictMode>,
)
