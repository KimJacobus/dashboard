import { Link } from "react-router-dom"

type GridSingleItemProps = {
  id: string
  firstname: string
  lastname: string
  pictures: string
}

export const GridSingleItem = ({ id, firstname, lastname, pictures }: GridSingleItemProps) => {
  return (
    <Link to={`/models/${id}`}>
    <div className="single-item flex h-64 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-slate-50 font-mono text-xl outline outline-1 outline-gray-400 hover:bg-gray-200 lg:h-96">
      <img className="w-44 pb-2 grayscale " src={pictures}></img>
      <p>{firstname}</p>
      <p>{lastname}</p>
    </div>
    </Link>

  )
}
