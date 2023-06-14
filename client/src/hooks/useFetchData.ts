import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'
//types
import { inputProps, fetchDataProps } from '../types/queryProps'

export const useFetchData = () => {
  const [variables, setVariables] = useState<{ filter: string; argument: string }>({
    filter: '',
    argument: '',
  })

  const { loading, error, data }: fetchDataProps = useQuery(getPeopleQuery, {
    variables,
  })

  const fetchPeople = ({ input }: inputProps) => {
    setVariables({
      filter: input?.filter || '',
      argument: input?.argument || '',
    })
    console.log('fetch people clicked!')
  }

  console.log(data)

  return {
    fetchDataResponse: { loading, error, data },
    fetchPeople,
  }
}

// filter: '_id'
// argument: '648337b44c67e4442634e492'
