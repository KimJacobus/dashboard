import { SingleFilterButton } from './SingleFilterButton'
import { ButtonInput } from './ButtonInputs'

import { fetchPeopleProps } from '../../../types/inputProps'

type FilterButtonsProps = {
  fetchPeople: ({ input }: fetchPeopleProps) => void
  setVariables: React.Dispatch<React.SetStateAction<{}>>
}

export const FilterButtons = ({ fetchPeople, setVariables }: FilterButtonsProps) => {
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
