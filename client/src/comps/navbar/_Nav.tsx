import { useState } from 'react'

//comps
import { NavBar } from './NavBar'

type _NavProps = {
  GridListToggler: () => void
}

const _Nav = ({ GridListToggler }: _NavProps) => {
  const [SearchModalToggle, setSearchModalToggle] = useState<boolean>(false)
  const handleSearchForm: () => void = () => {}

  return (
    <NavBar
      SearchModalToggle={SearchModalToggle}
      setSearchModalToggle={setSearchModalToggle}
      handleSearchForm={handleSearchForm}
      GridListToggler={GridListToggler}

    />
  )
}
export default _Nav
