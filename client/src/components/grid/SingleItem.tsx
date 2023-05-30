import { GridProps } from '../../types/GridProps'
export const SingleItem = ({ id,comment }: GridProps) => {
  return (
    <div className="single-item rounded-lg h-64 bg-cyan-900 ">
        <p>{id}</p>
    </div>
  )
}
