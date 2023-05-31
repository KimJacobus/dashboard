export const SearchModalInput = () => {
  return (
    <div className="ModalCard absolute top-5 h-2/4 w-3/4 rounded-lg bg-cyan-900">
      <div className="ModalInput m-0 flex h-10 w-full items-center gap-4 rounded-t-lg bg-cyan-700 p-2 ps-4 ">
        <img src="/search.svg"></img>

        <input
          id="search"
          placeholder="Search Database..."
          className="h-10 w-full border-none bg-cyan-700 placeholder:text-black focus:border-none
          focus:outline-none"
          type="text"
        />
      </div>
    </div>
  )
}
