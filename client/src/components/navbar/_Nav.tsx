import { useState } from 'react'

//comps
import { NavBar } from './NavBar'

const _Nav = () => {
  const [SearchModalToggle, setSearchModalToggle] = useState<boolean>(false)

  return (
    <NavBar
      SearchModalToggle={SearchModalToggle}
      setSearchModalToggle={setSearchModalToggle}
    />
  )
}
export default _Nav
