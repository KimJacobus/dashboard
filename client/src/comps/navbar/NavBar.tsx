//comps
import { NavBarButtons } from './NavButtons'
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchModal'
import { AccountSideBar } from './dashboard/AccountSideBar'
//types
import { AccountIcon } from './dashboard/AccountIcon'
import { GridListButton } from './gridlist-toggle/GridListButton'

type NavBarProps = {
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  handleSearchForm: () => void
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavBar = ({
  SearchModalToggle,
  AccountSideBarToggle,
  setSearchModalToggle,
  setAccountSideBarToggle,
  handleSearchForm,
}: NavBarProps) => {
  return (
    <div className="navbar-wrapper flex w-screen justify-center">
      <AccountSideBar
        AccountSideBarToggle={AccountSideBarToggle}
        setAccountSideBarToggle={setAccountSideBarToggle}
      />
      <nav className="NavBar m-4 flex h-20 w-full items-center justify-between rounded-lg bg-slate-100 px-5 lg:max-w-7xl">
        <SearchBar setSearchModalToggle={setSearchModalToggle} />
        {SearchModalToggle && (
          <SearchModal
            handleSearchForm={handleSearchForm}
            SearchModalToggle={SearchModalToggle}
            setSearchModalToggle={setSearchModalToggle}
          />
        )}
        <AccountIcon setAccountSideBarToggle={setAccountSideBarToggle} />
        {/* <NavBarButtons /> */}
      </nav>
    </div>
  )
}
