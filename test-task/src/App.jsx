import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './styles/global.scss'

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
      </Routes>
    </HashRouter>
  )
}
