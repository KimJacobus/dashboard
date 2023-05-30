import { NavBarProps } from "../../../types/NavBarProps"

export const SideBurgerMenu = ({handleBurgerClick} : NavBarProps) => {
  return (
    <div className="SideBurgerMenu absolute">
      <div className="ex text-9xl cursor-pointer" onClick={handleBurgerClick}>X</div>
      <h2 className="text-9xl">SideBurgerMenu</h2>
    </div>
  )
}
