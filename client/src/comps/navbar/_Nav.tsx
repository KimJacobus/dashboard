//comps
import { NavBar } from './NavBar'

type _NavProps = {
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  DarkModeToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
  DarkModeToggler: () => void
  FetchPeople: ({}) => void
  setVariables: React.Dispatch<React.SetStateAction<{}>>
}

const _Nav = ({
  SearchModalToggle,
  AccountSideBarToggle,
  DarkModeToggle,
  setAccountSideBarToggle,
  setSearchModalToggle,
  DarkModeToggler,
  FetchPeople,
  setVariables
}: _NavProps) => {
  const handleSearchForm: () => void = () => {}

  

  return (
    <NavBar
      DarkModeToggle={DarkModeToggle}
      DarkModeToggler={DarkModeToggler}
      SearchModalToggle={SearchModalToggle}
      AccountSideBarToggle={AccountSideBarToggle}
      setAccountSideBarToggle={setAccountSideBarToggle}
      setSearchModalToggle={setSearchModalToggle}
      handleSearchForm={handleSearchForm}
      FetchPeople={FetchPeople}
      setVariables={setVariables}
    />
  )
}
export default _Nav
