type ListSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const ListSingleItem = ({ id, comment }: ListSingleItemProps) => {
  return (
    <div className="single-item h-8 w-64 lg:w-96 rounded-md bg-gray-200 ps-2 outline outline-1 outline-gray-400">
      <p>{comment}</p>
    </div>
  )
}
