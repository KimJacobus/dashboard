//comps
import { NavBarButtons } from './NavButtons'
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchBarModal'
//types
import { NavBarProps } from '../../types/NavBarProps'
import { AccountIcon } from './account-icon/AccountIcon'

export const NavBar = ({
  SearchModalToggle,
  setSearchModalToggle,
}: NavBarProps) => {
  return (
    <nav className="NavBar flex h-20 w-screen items-center justify-around bg-slate-200 ps-5">
      <SearchBar setSearchModalToggle={setSearchModalToggle} />
      <AccountIcon />
      {SearchModalToggle && (
        <SearchModal
          SearchModalToggle={SearchModalToggle}
          setSearchModalToggle={setSearchModalToggle}
        />
      )}

      {/* <NavBarButtons /> */}
    </nav>
  )
}
