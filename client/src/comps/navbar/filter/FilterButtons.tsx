import { SingleFilterButton } from './SingleFilterButton'
import { ButtonInput } from './ButtonInputs'

type FilterButtonsProps = {
  FetchPeople: ({}) => void
  setVariables: React.Dispatch<React.SetStateAction<{}>>
}

export const FilterButtons = ({
  FetchPeople,
  setVariables,
}: FilterButtonsProps) => {
  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    filter: String,
    argument: String
  ) => {
    e.preventDefault()
    FetchPeople({ filter, argument })
  }

  return (
    <div className="f-buttons-wrapper flex justify-center">
      <div className="filter-buttons grid grid-cols-3 gap-2">
        {ButtonInput.map((button) => (
          <SingleFilterButton
            key={button.id}
            buttonText={button.text}
            filter={button.input.filter}
            argument={button.input.argument}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              clickHandler(e, {
                input: {
                  filter: 'passed through!',
                  argument: 'passed through!',
                },
              })
            }
          />
        ))}
      </div>
    </div>
  )
}
