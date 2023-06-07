import { fetchPeopleProps } from '../../../types/inputProps'

type SingleFilterButtonProps = {
  buttonText: string
  filter: string
  argument: string
  fetchPeople: ({ input }: fetchPeopleProps) => void
}

export const SingleFilterButton = ({
  buttonText,
  fetchPeople,
  filter,
  argument,
}: SingleFilterButtonProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, filter: string, argument: string) => {
    e.preventDefault()
    fetchPeople({ input: { filter, argument } })
  }

  return (
    <div className="SingleFilterButton rounded-md bg-gray-200 outline outline-1 outline-gray-400 hover:bg-slate-400">
      <button
        className="p-2 text-center font-mono"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => clickHandler(e, filter, argument)}
      >
        {buttonText}
      </button>
    </div>
  )
}
