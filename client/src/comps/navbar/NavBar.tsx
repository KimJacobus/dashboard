//comps
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchModal'
import { AccountSideBar } from './dashboard/AccountSideBar'
//types
import { AccountIcon } from './dashboard/AccountIcon'

type NavBarProps = {
  DarkModeToggle: boolean
  DarkModeToggler: () => void
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  handleSearchForm: () => void
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
  FetchPeople: ({}) => void
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
  FetchPeople,
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

      <nav className="NavBar m-4 flex h-20 w-full items-center justify-between rounded-lg bg-slate-100 px-5 lg:max-w-7xl">
        <SearchBar setSearchModalToggle={setSearchModalToggle} />
        {SearchModalToggle && (
          <SearchModal
            handleSearchForm={handleSearchForm}
            SearchModalToggle={SearchModalToggle}
            setSearchModalToggle={setSearchModalToggle}
            FetchPeople={FetchPeople}
            setVariables={setVariables}
          />
        )}
        <AccountIcon setAccountSideBarToggle={setAccountSideBarToggle} />
      </nav>
    </div>
  )
}
