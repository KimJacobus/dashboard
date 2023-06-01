//comps
import { NavBar } from './NavBar'

type _NavProps = {
  SearchModalToggle: boolean
  AccountSideBarToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const _Nav = ({
  SearchModalToggle,
  AccountSideBarToggle,
  setAccountSideBarToggle,
  setSearchModalToggle,
}: _NavProps) => {
  const handleSearchForm: () => void = () => {}

  return (
    <NavBar
      SearchModalToggle={SearchModalToggle}
      AccountSideBarToggle={AccountSideBarToggle}
      setAccountSideBarToggle={setAccountSideBarToggle}
      setSearchModalToggle={setSearchModalToggle}
      handleSearchForm={handleSearchForm}
    />
  )
}
export default _Nav
