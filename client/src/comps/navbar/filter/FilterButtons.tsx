import { SingleFilterButton } from './SingleFilterButton'
import { ButtonInput } from './ButtonInputs'

import { inputProps } from '../../../types/queryProps'

type FilterButtonsProps = {
  fetchPeople: ({ input }: inputProps) => void
}

export const FilterButtons = ({ fetchPeople }: FilterButtonsProps) => {
  // const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, filter: string, argument: string) => {
  //   e.preventDefault()
  //   fetchPeople({ input: { filter, argument } })
  // }

  return (
    <div className="f-buttons-wrapper flex justify-center">
      <div className="filter-buttons grid grid-cols-3 gap-2">
        {ButtonInput.map((button) => (
          <SingleFilterButton
            key={button.id}
            buttonText={button.text}
            filter={button.input.filter}
            argument={button.input.argument}
            fetchPeople={fetchPeople}
          />
        ))}
      </div>
    </div>
  )
}
