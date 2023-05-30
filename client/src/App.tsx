import { BrowserRouter, Routes, Route } from 'react-router-dom'
//styles
import './App.css'
//comps
import _Nav from './components/navbar/_Nav'
import MainPage from './pages/MainPage'



function App() {
  return (
    <BrowserRouter>
    <_Nav/>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
