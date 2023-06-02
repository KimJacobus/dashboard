import { SingleFilterButton } from './SingleFilterButton'

export const FilterButtons = () => {
  return (
    // map out and plug in filter hook
    <div className="f-buttons-wrapper flex justify-center">
      <div className="filter-buttons grid grid-cols-3 gap-2">
        <SingleFilterButton buttonText="filter" />
        <SingleFilterButton buttonText="filter" />
        <SingleFilterButton buttonText="filter" />
        <SingleFilterButton buttonText="filter" />
      </div>
    </div>
  )
}
