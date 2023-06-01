//react
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//styles
import './App.css'
//comps
import _MainPage from './pages/_MainPage'
import _Nav from './comps/navbar/_Nav'
import { BackGround } from './comps/BackGround'
//hooks
import { useGridListToggle } from './utils/useGridListToggle'
import { useListSelectionButton } from './utils/useListSelectionButton'
function App() {
  const { GridListToggle, GridListToggler } = useGridListToggle()
  const { ButtonStates, handleSelectionButton } = useListSelectionButton()

  const [SearchModalToggle, setSearchModalToggle] = useState<boolean>(false)
  const [AccountSideBarToggle, setAccountSideBarToggle] =
    useState<boolean>(false)

  return (
    <BrowserRouter>
      <_Nav
        GridListToggler={GridListToggler}
        SearchModalToggle={SearchModalToggle}
        setSearchModalToggle={setSearchModalToggle}
        AccountSideBarToggle={AccountSideBarToggle}
        setAccountSideBarToggle={setAccountSideBarToggle}
      />
      <Routes>
        <Route
          path="/"
          element={
            <_MainPage
              GridListToggle={GridListToggle}
              ButtonStates={ButtonStates}
              handleSelectionButton={handleSelectionButton}
            />
          }
        ></Route>
      </Routes>
      <BackGround />
    </BrowserRouter>
  )
}

export default App
