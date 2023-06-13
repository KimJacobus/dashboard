type GridSingleItemProps = {
  id: string
  firstname: string
  lastname: string
  pictures: string
}

export const GridSingleItem = ({ id, firstname, lastname, pictures }: GridSingleItemProps) => {
  return (
    <div className="single-item flex h-64 cursor-pointer items-center justify-center rounded-lg bg-slate-50 outline outline-1 outline-gray-400 hover:bg-gray-200 lg:h-96">
      <p>{firstname}</p>
      <p>{lastname}</p>
      <img src={pictures}></img>
    </div>
  )
}
