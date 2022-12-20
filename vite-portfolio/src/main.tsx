import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTemplate } from './App'
import { ErrorPage } from './pages/error/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppTemplate />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects",
    element: <AppTemplate />,
  },
  {
    path: "music",
    element: <AppTemplate />,
  },
  {
    path: "contact",
    element: <AppTemplate />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
