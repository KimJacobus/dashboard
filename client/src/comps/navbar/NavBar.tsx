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
  GridListToggler: () => void
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavBar = ({
  SearchModalToggle,
  AccountSideBarToggle,
  setSearchModalToggle,
  setAccountSideBarToggle,
  GridListToggler,
  handleSearchForm,
}: NavBarProps) => {
  return (
    <nav className="NavBar flex h-20 w-screen items-center justify-between bg-slate-100 px-5">
      <SearchBar setSearchModalToggle={setSearchModalToggle} />
      <GridListButton GridListToggler={GridListToggler} />
      <AccountIcon setAccountSideBarToggle={setAccountSideBarToggle} />
      {SearchModalToggle && (
        <SearchModal
          handleSearchForm={handleSearchForm}
          setSearchModalToggle={setSearchModalToggle}
        />
      )}
      {AccountSideBarToggle && (
        <AccountSideBar setAccountSideBarToggle={setAccountSideBarToggle} />
      )}

      {/* <NavBarButtons /> */}
    </nav>
  )
}
