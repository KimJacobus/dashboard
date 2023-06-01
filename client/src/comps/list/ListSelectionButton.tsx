type ListSelectionButtonProps = {
  ButtonStates: boolean[]
  index: number
}

export const ListSelectionButton = ({
  ButtonStates,
  index,
}: ListSelectionButtonProps) => {
  return (
    <div className="single-item flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 outline outline-1 outline-gray-400 hover:bg-gray-200">
      {ButtonStates[index] && (
        <img className="button-content" src="/check.svg"></img>
      )}
    </div>
  )
}
