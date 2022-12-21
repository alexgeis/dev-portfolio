import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTemplate } from './App'
import { Player } from "./pages/music/PlayerApp";
import { tracks } from "./assets/audio/audio";
import { ErrorPage } from './pages/error/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { HomePage } from './pages/home/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppTemplate />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "projects",
        // element: <AppTemplate />,
      },
      {
        path: "music",
        element: <Player trackList={tracks} />,
      },
      {
        path: "contact",
        // element: <AppTemplate />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
