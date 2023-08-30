//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//styles
import './App.css'
//comps
import _queryTest from './comps/_queryTest'
import _Nav from './comps/navbar/_Nav'
import { _SideBar } from './comps/sidebar/_SideBar'
import { BackGround } from './pages/BackGround'
//pages
import _MainPage from './pages/mainpage/_MainPage'
import { _SingleModelPage } from './pages/single-modelpage/_SingleModelPage'
import { _ProjectPage } from './pages/projectpage/_ProjectPage'
//hooks
import { useState } from 'react'
import { useGridListToggle } from './utils/useGridListToggle'
import { useListSelectionButton } from './utils/useListSelectionButton'
import { useDarkModeToggle } from './utils/useDarkModeToggle'
import { useSelection } from './utils/useSelection'
import { useFetchData } from './hooks/useFetchData'
import { RootLayout } from './pages/RootLayout'
//env
import { routerBasePath } from '../routerBasePath'
function App() {
  //utils
  const { GridListToggle, GridListToggler } = useGridListToggle()
  const { DarkModeToggle, DarkModeToggler } = useDarkModeToggle()
  const { ButtonStates, handleSelectionButton } = useListSelectionButton()
  const { SelectionSelector, selection } = useSelection()
  //hooks
  const { fetchDataResponse, fetchPeople } = useFetchData()
  //states
  const [SearchModalToggle, setSearchModalToggle] = useState<boolean>(false)
  const [AccountSideBarToggle, setAccountSideBarToggle] = useState<boolean>(false)

  return (
    <BrowserRouter>
      <RootLayout>
        <_SideBar fetchPeople={fetchPeople} />
        <_Nav
          DarkModeToggle={DarkModeToggle}
          DarkModeToggler={DarkModeToggler}
          SearchModalToggle={SearchModalToggle}
          setSearchModalToggle={setSearchModalToggle}
          AccountSideBarToggle={AccountSideBarToggle}
          setAccountSideBarToggle={setAccountSideBarToggle}
          fetchPeople={fetchPeople}
        />
        <Routes>
          <Route
            path={routerBasePath}
            element={
              <_MainPage
                GridListToggle={GridListToggle}
                GridListToggler={GridListToggler}
                ButtonStates={ButtonStates}
                selection={selection}
                handleSelectionButton={handleSelectionButton}
                SelectionSelector={SelectionSelector}
                fetchDataResponse={fetchDataResponse}
                fetchPeople={fetchPeople}
              />
            }
          ></Route>
          <Route
            path={routerBasePath + 'models/:id'}
            element={<_SingleModelPage fetchPeople={fetchPeople} fetchDataResponse={fetchDataResponse} />}
          ></Route>
          <Route path={routerBasePath + 'projects'} element={<_ProjectPage />}></Route>
          <Route path={routerBasePath + 'available'} element={<_ProjectPage />}></Route>
        </Routes>
      </RootLayout>
      <BackGround />
    </BrowserRouter>
  )
}

export default App
