//react
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//styles
import './App.css'
//comps
import _queryTest from './comps/_queryTest'
import _MainPage from './pages/mainpage/_MainPage'
import _Nav from './comps/navbar/_Nav'
import { _SideBar } from './comps/sidebar/_SideBar'
import { BackGround } from './pages/BackGround'
//hooks
import { useGridListToggle } from './utils/useGridListToggle'
import { useListSelectionButton } from './utils/useListSelectionButton'
import { useDarkModeToggle } from './utils/useDarkModeToggle'
import { useSelection } from './utils/useSelection'
import { useFilterButtons } from './hooks/useFilterButtons'
import { RootLayout } from './pages/RootLayout'

function App() {
  //utils
  const { GridListToggle, GridListToggler } = useGridListToggle()
  const { DarkModeToggle, DarkModeToggler } = useDarkModeToggle()
  const { ButtonStates, handleSelectionButton } = useListSelectionButton()
  const { SelectionSelector, selection } = useSelection()
  //hooks
  const { fetchPplResponse, fetchPeople, setVariables, FTest } = useFilterButtons()

  //states
  const [SearchModalToggle, setSearchModalToggle] = useState<boolean>(false)
  const [AccountSideBarToggle, setAccountSideBarToggle] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <RootLayout>
        <_SideBar />
        <_Nav
          DarkModeToggle={DarkModeToggle}
          DarkModeToggler={DarkModeToggler}
          SearchModalToggle={SearchModalToggle}
          setSearchModalToggle={setSearchModalToggle}
          AccountSideBarToggle={AccountSideBarToggle}
          setAccountSideBarToggle={setAccountSideBarToggle}
          fetchPeople={fetchPeople}
          setVariables={setVariables}
        />
        <Routes>
          <Route
            path="/"
            element={
              <_MainPage
                GridListToggle={GridListToggle}
                GridListToggler={GridListToggler}
                ButtonStates={ButtonStates}
                selection={selection}
                handleSelectionButton={handleSelectionButton}
                SelectionSelector={SelectionSelector}
              />
            }
          ></Route>
          <Route
            path="/test"
            element={<_queryTest fetchPplResponse={fetchPplResponse} FTest={FTest} />}
          ></Route>
        </Routes>
      </RootLayout>
      <BackGround />
    </BrowserRouter>
  )
}

export default App
