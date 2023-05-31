import { BrowserRouter, Routes, Route } from 'react-router-dom'
//styles
import './App.css'
//comps
import _MainPage from './pages/_MainPage'
import _Nav from './comps/navbar/_Nav'
//hooks
import { useGridListToggle } from './utils/useGridListToggle'
function App() {
  const { GridListToggle, GridListToggler } = useGridListToggle()

  return (
    <BrowserRouter>
      <_Nav GridListToggler={GridListToggler} />
      <Routes>
        <Route
          path="/"
          element={<_MainPage GridListToggle={GridListToggle} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
