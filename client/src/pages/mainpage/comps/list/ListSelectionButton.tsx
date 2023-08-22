import check from '/check.svg'

type ListSelectionButtonProps = {
  ButtonStates: boolean[]
  index: number
  SelectionSelector: (id: string) => void
  handleSelectionButton: (index: number) => void
  id: string
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
      className="single-item flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-slate-50 outline outline-1 outline-gray-400 hover:bg-gray-200"
      onClick={() => (SelectionSelector(id), handleSelectionButton(index))}
    >
      {ButtonStates[index] && <img className="button-content" src={check}></img>}
    </div>
  )
}
