import { SearchModalInput } from './SearchModalInput'

type SearchModalProps = {
  SearchModalToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  handleSearchForm: () => void
}

export const SearchModal = ({
  SearchModalToggle,
  setSearchModalToggle,
  handleSearchForm,
}: SearchModalProps) => {
  console.log(SearchModalToggle)
  return (
    <>
      <div
        className="absolute left-0 top-0 h-screen w-screen scale-100 bg-slate-300 opacity-80"
        onClick={() => setSearchModalToggle((prevState) => !prevState)}
      ></div>
      <SearchModalInput
        SearchModalToggle={SearchModalToggle}
        setSearchModalToggle={setSearchModalToggle}
      />
    </>
  )
}
