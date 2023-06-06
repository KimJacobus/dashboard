import { SingleFilterButton } from './SingleFilterButton'
import { ButtonInput } from './ButtonInputs'

type FilterButtonsProps = {
  FetchPeople: ({}) => void
}

export const FilterButtons = ({ FetchPeople }: FilterButtonsProps) => {
  return (
    <div className="f-buttons-wrapper flex justify-center">
      <div className="filter-buttons grid grid-cols-3 gap-2">
        {ButtonInput.map((button) => (
          <SingleFilterButton
            key={button.id}
            buttonText={button.text}
            filter={button.input.filter}
            argument={button.input.argument}
            onClick={() =>
              FetchPeople({
                input: {
                  filter: button.input.filter,
                  argument: button.input.argument,
                },
              })
            }
          />
        ))}
      </div>
    </div>
  )
}
