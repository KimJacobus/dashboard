//comps
import { NavBar } from './NavBar'
//types
import { inputProps } from '@type/queryProps'

type _NavProps = {
  AccountSideBarToggle: boolean
  DarkModeToggle: boolean
  DarkModeToggler: () => void
  fetchPeople: ({ input }: inputProps) => void
  SearchModalToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const _Nav = ({ ...props }: _NavProps) => {
  return (
    <div className="NavBar col-span-8 row-span-1">
      <NavBar {...props} />
    </div>
  )
}
export default _Nav
