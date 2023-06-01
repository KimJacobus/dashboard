type ListSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const ListSingleItem = ({ id }: ListSingleItemProps) => {
  return (
    <div className="single-item h-8 w-64 rounded-md bg-gray-200 outline outline-1 outline-gray-400">
      <p>{id}</p>
    </div>
  )
}
