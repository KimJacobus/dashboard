import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'
//types
import { inputProps, fetchDataProps } from '../types/queryProps'
//dev data
import { peopleData } from '../data/fakePeopleData'

export const useFetchData = () => {
  const [variables, setVariables] = useState<{ filter: string; argument: string }>({
    filter: '',
    argument: '',
  })

  const { loading, error, data }: fetchDataProps = useQuery(getPeopleQuery, {
    variables,
  })

  const fakeDataQuery = ({ input }: { input: { filter: string; argument: string } }) => {
    if (!peopleData) return

    const fakePeopledata = peopleData.filter((d) => {
      const keys = Object.keys(d)
      return keys.some((key) => {
        return d[key as keyof typeof d] === input.filter || d[key as keyof typeof d] === input.argument
      })
    })
    return fakePeopledata
  }

  const fetchPeople = ({ input }: inputProps) => {
    setVariables({
      filter: input?.filter || '',
      argument: input?.argument || '',
    })
    console.log('fetch people clicked!')
  }

  console.log(data)

  return {
    fakeDataQuery,
    fetchDataResponse: { loading, error, data },
    fetchPeople,
  }
}

// filter: '_id'
// argument: '648337b44c67e4442634e492'
