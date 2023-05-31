import { NavBarProps } from '../../../types/NavBarProps'

export const BurgerMenu = ({
  setSearchModalToggle: setBurgerToggle,
}: NavBarProps) => {
  return (
    <button
      className="hamburger-menu-container m-2 flex h-full min-w-[5rem] flex-col items-center gap-2 border-none p-4"
      onClick={() => setBurgerToggle((prevState) => !prevState)}
    >
      <div className="hamburger-button h-2 w-full rounded-full bg-zinc-950"></div>
      <div className="hamburger-button h-2 w-full rounded-full bg-zinc-950"></div>
      <div className="hamburger-button h-2 w-full rounded-full bg-zinc-950"></div>
    </button>
  )
}

//might want to get rid of the padding etc, css seems a bit too wishy washy now
