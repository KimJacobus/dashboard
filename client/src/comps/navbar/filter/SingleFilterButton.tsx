type SingleFilterButtonProps = {
  buttonText: string
  filter: string
  argument: string
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

export const SingleFilterButton = ({ buttonText }: SingleFilterButtonProps) => {
  return (
    <div className="SingleFilterButton rounded-md bg-gray-200 outline outline-1 outline-gray-400 hover:bg-slate-400">
      <button className="p-2 text-center font-mono">{buttonText}</button>
    </div>
  )
}
