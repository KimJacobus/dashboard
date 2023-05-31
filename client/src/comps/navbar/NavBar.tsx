//comps
import { NavBarButtons } from './NavButtons'
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchModal'
//types
import { AccountIcon } from './account-icon/AccountIcon'
import { GridListButton } from './gridlist-toggle/GridListButton'

type NavBarProps = {
  SearchModalToggle: boolean
  handleSearchForm: () => void
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  GridListToggler: () => void
}

export const NavBar = ({
  SearchModalToggle,
  handleSearchForm,
  setSearchModalToggle,
  GridListToggler,
}: NavBarProps) => {
  return (
    <nav className="NavBar flex h-20 w-screen items-center justify-between bg-slate-200 px-5">
      <SearchBar setSearchModalToggle={setSearchModalToggle} />
      <GridListButton GridListToggler={GridListToggler} />
      <AccountIcon />
      {SearchModalToggle && (
        <SearchModal
          handleSearchForm={handleSearchForm}
          setSearchModalToggle={setSearchModalToggle}
        />
      )}

      {/* <NavBarButtons /> */}
    </nav>
  )
}
