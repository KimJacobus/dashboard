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
        className="search-input h-9 w-40 cursor-pointer rounded-lg border-none bg-slate-50
       hover:bg-slate-400 focus:border-none focus:outline-none"
      >
        <div className="flex h-full items-center gap-1 p-2">
          <img src="/search.svg" alt="" />
          <div className="">Search...</div>
        </div>
      </div>
    </div>
  )
}
