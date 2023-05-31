type ListSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const ListSingleItem = ({ id }: ListSingleItemProps) => {
  return (
    <div className="single-item min-h-5 rounded-lg bg-cyan-900 ">
      <p>{id}</p>
    </div>
  )
}
