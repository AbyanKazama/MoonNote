import './App.css'
import { Routes, Route } from 'react-router-dom'
import BirthdayTemplate from './pages/BirthdayTemplate'
import Home from './home/homes'

// Home Layout


function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:name' element={<BirthdayTemplate />} />
    </Routes>
  )
}

export default App
