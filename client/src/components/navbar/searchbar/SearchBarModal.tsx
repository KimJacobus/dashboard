import { NavBarProps } from '../../../types/NavBarProps'
import { SearchModalInput } from './SearchModalInput'

export const SearchModal = ({ setSearchModalToggle }: NavBarProps) => {
  return (
    <>
      <div
        className="fixed left-0 top-0 h-screen w-screen scale-100 bg-slate-300 opacity-80"
        onClick={() => setSearchModalToggle((prevState) => !prevState)}
      ></div>
      <SearchModalInput />
    </>
  )
}
