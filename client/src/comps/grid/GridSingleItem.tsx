type GridSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const GridSingleItem = ({ id, comment }: GridSingleItemProps) => {
  return (
    <div className="single-item h-64 rounded-lg bg-cyan-900 ">
      <p>{id}</p>
    </div>
  )
}
