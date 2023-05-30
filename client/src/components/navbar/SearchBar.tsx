export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <label htmlFor="searchbar"></label>
      <form id="searchbar">
        <input
          placeholder="search"
          className="rounded-lg border-none focus:border-none"
        ></input>
      </form>
    </div>
  )
}
