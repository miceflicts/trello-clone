import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TrelloBoardsPage from './pages/trelloBoards/index.jsx';
import Header from './layouts/header/index.jsx';
import './index.css'

import { BrowserRouter } from 'react-router-dom';

/* import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from './pages/404/index.jsx'; */

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "boards/:Id",
    element: <TrelloBoardsPage/>,
  }
]); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
