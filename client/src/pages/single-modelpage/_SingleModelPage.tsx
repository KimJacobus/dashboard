import { useParams } from 'react-router-dom'
import { SingleModel } from './SingleModel'
import { useEffect } from 'react'
import { fetchDataProps, inputProps } from '@type/queryProps'
//types
import { Person } from '@type/queryProps'

type SingleModelPageProps = {
  fetchDataResponse: fetchDataProps
  fetchPeople: ({ input }: inputProps) => void
}

export const _SingleModelPage = ({ fetchPeople, fetchDataResponse }: SingleModelPageProps) => {
  const { id } = useParams()
  const { error, loading, data } = fetchDataResponse

  useEffect(() => {
    fetchPeople({ input: { filter: '_id', argument: id } })
  }, [id])

  return (
    <div className="model-page-wrapper col-span-8 row-span-5 flex justify-center rounded-lg">
      <div className="model-page mx-4 w-full rounded-lg bg-slate-50 p-1">
        {data && <SingleModel data={data} />}
      </div>
    </div>
  )
}
