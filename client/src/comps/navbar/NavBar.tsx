//comps
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchModal'
import { AccountSideBar } from './dashboard/AccountSideBar'
//types
import { AccountIcon } from './dashboard/AccountIcon'
import { inputProps } from '../../types/queryProps'

type NavBarProps = {
  DarkModeToggle: boolean
  DarkModeToggler: () => void
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
  fetchPeople: ({ input }: inputProps) => void
}

export const NavBar = ({
  SearchModalToggle,
  AccountSideBarToggle,
  DarkModeToggle,
  setSearchModalToggle,
  setAccountSideBarToggle,
  DarkModeToggler,
  fetchPeople,
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
            SearchModalToggle={SearchModalToggle}
            setSearchModalToggle={setSearchModalToggle}
            fetchPeople={fetchPeople}
          />
        )}
        <AccountIcon setAccountSideBarToggle={setAccountSideBarToggle} />
      </nav>
    </div>
  )
}
