type ListSelectionButtonProps = {
  ButtonStates: boolean[]
  index: number
  SelectionSelector: (id: number) => void
  handleSelectionButton: (index: number) => void
  id: number
}

export const ListSelectionButton = ({
  ButtonStates,
  index,
  SelectionSelector,
  handleSelectionButton,
  id,
}: ListSelectionButtonProps) => {
  return (
    <div
      className="single-item flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-slate-50 outline outline-1 outline-gray-400 hover:bg-gray-200"
      onClick={() => (SelectionSelector(id), handleSelectionButton(index))}
    >
      {ButtonStates[index] && (
        <img className="button-content" src="/check.svg"></img>
      )}
    </div>
  )
}
