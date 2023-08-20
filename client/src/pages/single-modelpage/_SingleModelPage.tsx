import { useParams } from 'react-router-dom'
import { SingleModel } from './SingleModel'
import { useEffect } from 'react'
import { fetchDataProps, inputProps, singleDataProps } from '../../types/queryProps'
//dev data
import { peopleData } from '../../data/fakePeopleData'

type SingleModelPageProps = {
  fetchPeople: ({ input }: inputProps) => void
  fetchDataResponse: fetchDataProps
}

export const _SingleModelPage = () => {
  const { id } = useParams()
  const numberId = Number(id)

  const data = peopleData[numberId]

  console.log(peopleData[0]);
  
  // const { error, loading, data } = fetchDataResponse

  // useEffect(() => {
  //   fetchPeople({ input: { filter: '_id', argument: id } })
  // }, [id])

  // if (loading) {
  //   ;<p>loading...</p>
  // }

  // if (error) {
  //   ;<p>error</p>
  // }

  return (
    <div className="model-page-wrapper col-span-8 row-span-5 flex justify-center rounded-lg">
      <div className="model-page mx-4 w-full rounded-lg bg-slate-50 p-1">
        {data && <SingleModel data={data} />}
      </div>
    </div>
  )
}
