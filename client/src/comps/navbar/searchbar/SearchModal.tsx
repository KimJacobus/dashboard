import { SearchModalInput } from './SearchModalInput'
import { inputProps } from '../../../types/queryProps'

type SearchModalProps = {
  SearchModalToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  fetchPeople: ({ input }: inputProps) => void
}

export const SearchModal = ({ setSearchModalToggle, fetchPeople }: SearchModalProps) => {
  return (
    <>
      <div
        className="absolute left-0 top-0 h-screen w-screen scale-100 bg-slate-300 opacity-80"
        onClick={() => setSearchModalToggle((prevState) => !prevState)}
      ></div>
      <SearchModalInput setSearchModalToggle={setSearchModalToggle} fetchPeople={fetchPeople} />
    </>
  )
}
