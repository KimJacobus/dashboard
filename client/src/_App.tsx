//react
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//styles
import './App.css'
//comps
import _MainPage from './pages/mainpage/_MainPage'
import _Nav from './comps/navbar/_Nav'
import { BackGround } from './pages/BackGround'
//hooks
import { useGridListToggle } from './utils/useGridListToggle'
import { useListSelectionButton } from './utils/useListSelectionButton'
import { useDarkModeToggle } from './utils/useDarkModeToggle'
import { useSelection } from './utils/useSelection'

function App() {
  const { GridListToggle, GridListToggler } = useGridListToggle()
  const { DarkModeToggle, DarkModeToggler } = useDarkModeToggle()
  const { ButtonStates, handleSelectionButton } = useListSelectionButton()
  const { SelectionSelector, Selection } = useSelection()

  const [SearchModalToggle, setSearchModalToggle] = useState<boolean>(false)
  const [AccountSideBarToggle, setAccountSideBarToggle] =
    useState<boolean>(false)

  return (
    <BrowserRouter>
      <_Nav
        DarkModeToggle={DarkModeToggle}
        DarkModeToggler={DarkModeToggler}
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
              GridListToggler={GridListToggler}
              ButtonStates={ButtonStates}
              Selection={Selection}
              handleSelectionButton={handleSelectionButton}
              SelectionSelector={SelectionSelector}
            />
          }
        ></Route>
      </Routes>
      <BackGround />
    </BrowserRouter>
  )
}

export default App
