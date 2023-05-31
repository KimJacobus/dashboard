import { SearchModalInput } from './SearchModalInput'

type SearchModalProps = {
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  handleSearchForm: () => void
}

export const SearchModal = ({
  setSearchModalToggle,
  handleSearchForm,
}: SearchModalProps) => {
  return (
    <>
      <div
        className="fixed left-0 top-0 h-screen w-screen scale-100 bg-slate-300 opacity-80"
        onClick={() => setSearchModalToggle((prevState) => !prevState)}
      ></div>
      <SearchModalInput setSearchModalToggle={setSearchModalToggle} />
    </>
  )
}
