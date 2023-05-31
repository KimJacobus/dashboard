type ListSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const ListSingleItem = ({ id }: ListSingleItemProps) => {
  return (
    <div className="single-item m-2 h-8 rounded-md bg-gray-200 outline outline-1 outline-gray-400">
      <p>{id}</p>
    </div>
  )
}
