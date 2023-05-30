//comps
import { NavBarButtons } from './NavButtons'
import { SearchBar } from './SearchBar'
import { NavBarTitle } from './NavBarTitle'
import { BurgerMenu } from './burgermenu/BurgerMenu'
import { SideBurgerMenu } from './burgermenu/SideBurgerMenu'
//types
import { NavBarProps } from '../../types/NavBarProps'



export const NavBar = ({
  handleBurgerClick,
  BurgerToggle,
}: NavBarProps) => {
  return (
    <div className="NavBar flex h-20 w-screen items-center justify-between bg-slate-200">
      <NavBarTitle />
      {/* toggle burger side menu */}


      {BurgerToggle ? <SideBurgerMenu handleBurgerClick={handleBurgerClick}/> : null}
      <BurgerMenu handleBurgerClick={handleBurgerClick} />

      {/* desktop */}
      {/* <SearchBar /> */}
      {/* <NavBarButtons /> */}
    </div>
  )
}
