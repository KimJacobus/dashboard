import search from '/search.svg'

type SearchBarProps = {
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchBar = ({ setSearchModalToggle }: SearchBarProps) => {
  return (
    <div
      className="SearchBar"
      onClick={() => setSearchModalToggle((prevState) => !prevState)}
    >
      <div
        className="search-input soutline h-9 w-40 cursor-pointer rounded-lg border-none bg-gray-200
       outline-1 outline-slate-400 hover:bg-slate-400 focus:border-none focus:outline-none lg:w-[30rem]"
      >
        <div className="flex h-full items-center gap-1 p-2">
          <img src={search} alt="" />
          <div className="">Search...</div>
        </div>
      </div>
    </div>
  )
}
