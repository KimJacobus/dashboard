type ListSingleItemProps = {
  id: number
  comment: string
  image: string
}

export const ListSingleItem = ({ comment }: ListSingleItemProps) => {
  return (
    <div className="single-item h-7 w-60 rounded-md bg-gray-200 ps-2 outline outline-1 outline-gray-400 lg:w-96">
      <p>{comment}</p>
    </div>
  )
}
