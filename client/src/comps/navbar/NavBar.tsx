//comps
import { SearchBar } from './searchbar/SearchBar'
import { SearchModal } from './searchbar/SearchModal'
import { AccountSideBar } from './dashboard/AccountSideBar'
//types
import { AccountIcon } from './dashboard/AccountIcon'
import { inputProps } from '@type/queryProps'

type NavBarProps = {
  AccountSideBarToggle: boolean
  DarkModeToggle: boolean
  DarkModeToggler: () => void
  fetchPeople: ({ input }: inputProps) => void
  SearchModalToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavBar = ({
...props
}: NavBarProps) => {
  return (
    <div className="navbar-wrapper flex justify-center">
      {props.AccountSideBarToggle && (
        <AccountSideBar
        {...props}
        />
      )}

      <nav className="NavBar lg:w-7xl m-4  flex h-20 w-full items-center justify-between rounded-lg bg-slate-100 px-5 lg:h-28">
        <SearchBar setSearchModalToggle={props.setSearchModalToggle} />
        {props.SearchModalToggle && (
          <SearchModal
          {...props}
          />
        )}
        <AccountIcon setAccountSideBarToggle={props.setAccountSideBarToggle} />
      </nav>
    </div>
  )
}
