//comps
import { NavBar } from './NavBar'
//types
import { inputProps } from '../../types/queryProps'

type _NavProps = {
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  DarkModeToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
  DarkModeToggler: () => void
  fetchPeople: ({ input }: inputProps) => void
}

const _Nav = ({
  SearchModalToggle,
  AccountSideBarToggle,
  DarkModeToggle,
  setAccountSideBarToggle,
  setSearchModalToggle,
  DarkModeToggler,
  fetchPeople,
}: _NavProps) => {
  return (
    <div className="NavBar col-span-8 row-span-1">
      <NavBar
        DarkModeToggle={DarkModeToggle}
        DarkModeToggler={DarkModeToggler}
        SearchModalToggle={SearchModalToggle}
        AccountSideBarToggle={AccountSideBarToggle}
        setAccountSideBarToggle={setAccountSideBarToggle}
        setSearchModalToggle={setSearchModalToggle}
        fetchPeople={fetchPeople}
      />
    </div>
  )
}
export default _Nav
