import { useParams } from 'react-router-dom'
import { SingleModel } from './SingleModel'
import { useEffect } from 'react'
import { fetchDataProps, inputProps, singleDataProps } from '@type/queryProps'
//types
import { Person } from '@type/queryProps'
//dev data
import { peopleData } from '../../../../client/public/fakePeopleData'

type SingleModelPageProps = {
  fetchPeople: ({ input }: inputProps) => void
  fakeData?: Person[]
}

export const _SingleModelPage = ({ fakeData, fetchPeople }: SingleModelPageProps) => {
  const { id } = useParams()
  const numberId = Number(id)
  const data = peopleData[numberId]

  // useEffect(() => {
  //   fetchPeople({ input: { filter: '_id', argument: id } })
  // }, [id])

  return (
    <div className="model-page-wrapper col-span-8 row-span-5 flex justify-center rounded-lg">
      <div className="model-page mx-4 w-full rounded-lg bg-slate-50 p-1">
        {data && <SingleModel data={data} />}
      </div>
    </div>
  )
}
