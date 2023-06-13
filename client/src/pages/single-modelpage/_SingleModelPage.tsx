import { useParams } from 'react-router-dom'
import { SingleModel } from './SingleModel'

export const _SingleModelPage = () => {
  const { id } = useParams()

  return (
    <div className="model-page-wrapper col-span-8 row-span-5 flex justify-center rounded-lg">
      <div className="model-page mx-4 w-full rounded-lg bg-slate-50 p-1">
        <SingleModel />
      </div>
    </div>
  )
}
