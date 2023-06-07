//comps
import { NavBar } from './NavBar'
//types
import { fetchPeopleProps } from '../../types/inputProps'

type _NavProps = {
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  DarkModeToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
  DarkModeToggler: () => void
  fetchPeople: ({ input }: fetchPeopleProps) => void
  setVariables: React.Dispatch<React.SetStateAction<{}>>
}

const _Nav = ({
  SearchModalToggle,
  AccountSideBarToggle,
  DarkModeToggle,
  setAccountSideBarToggle,
  setSearchModalToggle,
  DarkModeToggler,
  fetchPeople,
  setVariables,
}: _NavProps) => {
  const handleSearchForm: () => void = () => {}

  return (
    <div className="NavBar col-span-8 row-span-1">
      <NavBar
        DarkModeToggle={DarkModeToggle}
        DarkModeToggler={DarkModeToggler}
        SearchModalToggle={SearchModalToggle}
        AccountSideBarToggle={AccountSideBarToggle}
        setAccountSideBarToggle={setAccountSideBarToggle}
        setSearchModalToggle={setSearchModalToggle}
        handleSearchForm={handleSearchForm}
        fetchPeople={fetchPeople}
        setVariables={setVariables}
      />
    </div>
  )
}
export default _Nav
