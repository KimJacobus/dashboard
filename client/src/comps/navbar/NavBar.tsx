//comps
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchModal'
import { AccountSideBar } from './dashboard/AccountSideBar'
//types
import { AccountIcon } from './dashboard/AccountIcon'
import { fetchPeopleProps } from '../../types/inputProps'

type NavBarProps = {
  DarkModeToggle: boolean
  DarkModeToggler: () => void
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  handleSearchForm: () => void
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
  fetchPeople: ({ input }: fetchPeopleProps) => void
  setVariables: React.Dispatch<React.SetStateAction<{}>>
}

export const NavBar = ({
  SearchModalToggle,
  AccountSideBarToggle,
  DarkModeToggle,
  setSearchModalToggle,
  setAccountSideBarToggle,
  DarkModeToggler,
  handleSearchForm,
  fetchPeople,
  setVariables,
}: NavBarProps) => {
  return (
    <div className="navbar-wrapper flex justify-center">
      {AccountSideBarToggle && (
        <AccountSideBar
          DarkModeToggle={DarkModeToggle}
          DarkModeToggler={DarkModeToggler}
          AccountSideBarToggle={AccountSideBarToggle}
          setAccountSideBarToggle={setAccountSideBarToggle}
        />
      )}

      <nav className="NavBar lg:w-7xl m-4  flex h-20 w-full items-center justify-between rounded-lg bg-slate-100 px-5 lg:h-28">
        <SearchBar setSearchModalToggle={setSearchModalToggle} />
        {SearchModalToggle && (
          <SearchModal
            handleSearchForm={handleSearchForm}
            SearchModalToggle={SearchModalToggle}
            setSearchModalToggle={setSearchModalToggle}
            fetchPeople={fetchPeople}
            setVariables={setVariables}
          />
        )}
        <AccountIcon setAccountSideBarToggle={setAccountSideBarToggle} />
      </nav>
    </div>
  )
}
