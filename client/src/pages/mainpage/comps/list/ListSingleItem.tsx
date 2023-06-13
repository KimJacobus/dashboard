type ListSingleItemProps = {
  id: string
  firstname: string
  lastname: string
  pictures: string
}

export const ListSingleItem = ({ id, firstname, lastname, pictures }: ListSingleItemProps) => {
  return (
    <div className="single-item flex w-60 gap-2 rounded-md bg-gray-200 ps-2 outline outline-1 outline-gray-400 lg:w-96">
      <img src={pictures} className="h-10 w-10"></img>
      <p>{firstname}</p>
      <p>{lastname}</p>
    </div>
  )
}
