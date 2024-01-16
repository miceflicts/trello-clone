import HomePage from './pages/home'
import Header from './layouts/header'
import ErrorPage from './pages/404'
import TrelloBoardsPage from './pages/trelloBoards'

import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="boards/:Id" element={<TrelloBoardsPage />} />
        {/* Catch-all route for 404 errors. */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default App
