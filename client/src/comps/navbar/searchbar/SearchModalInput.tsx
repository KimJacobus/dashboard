import { FilterButtons } from '../filter/FilterButtons'

type SearchModalInputProps = {
  SearchModalToggle: boolean
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchModalInput = ({
  SearchModalToggle,
  setSearchModalToggle,
}: SearchModalInputProps) => {
  return (
    <form className="ModalCard absolute left-12 top-10 z-10 h-2/4 w-3/4 rounded-lg bg-indigo-100 outline outline-2 outline-indigo-500">
      <div className="ModalInput mb-12 flex h-10 w-full items-center gap-4 rounded-t-lg bg-indigo-400 p-2 ps-4 ">
        <img src="/search.svg"></img>

        <input
          id="search"
          placeholder="Search Database..."
          className="h-10 w-full border-none bg-indigo-400 placeholder:text-black focus:border-none
          focus:outline-none"
          type="text"
        />
        <img
          className="cursor-pointer"
          onClick={() => setSearchModalToggle((prevState) => !prevState)}
          src="/x-square.svg"
          alt=""
        />

      </div>
        <FilterButtons />
    </form>
  )
}
