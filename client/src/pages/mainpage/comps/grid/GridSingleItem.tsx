type GridSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const GridSingleItem = ({ id, comment }: GridSingleItemProps) => {
  return (
    <div className="single-item flex h-64 items-center justify-center rounded-lg bg-slate-50 outline outline-1 outline-gray-400 hover:bg-gray-200">
      <p>{comment}</p>
    </div>
  )
}
