import { useState } from 'react'

//comps
import { NavBar } from './NavBar'

const _Nav = () => {
  const [BurgerToggle, setBurgerToggle] = useState<boolean>(false)

  const handleBurgerClick = () => {
    console.log('hamburger clicked')
    setBurgerToggle((prevState) => !prevState)
    console.log(BurgerToggle)
  }

  return (
    <NavBar handleBurgerClick={handleBurgerClick} BurgerToggle={BurgerToggle} />
  )
}
export default _Nav
