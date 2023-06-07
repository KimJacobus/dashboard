import { SearchModalInput } from './SearchModalInput'
import { fetchPeopleProps } from '../../../types/inputProps'


type SearchModalProps = {
  SearchModalToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  handleSearchForm: () => void
  fetchPeople: ({ input }: fetchPeopleProps) => void
  setVariables: React.Dispatch<React.SetStateAction<{}>>
}

export const SearchModal = ({
  SearchModalToggle,
  setSearchModalToggle,
  handleSearchForm,
  fetchPeople,
  setVariables
}: SearchModalProps) => {
  return (
    <>
      <div
        className="absolute left-0 top-0 h-screen w-screen scale-100 bg-slate-300 opacity-80"
        onClick={() => setSearchModalToggle((prevState) => !prevState)}
      ></div>
      <SearchModalInput
        SearchModalToggle={SearchModalToggle}
        setSearchModalToggle={setSearchModalToggle}
        fetchPeople={fetchPeople}
        setVariables={setVariables}
      />
    </>
  )
}
