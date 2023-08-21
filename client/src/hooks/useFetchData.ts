import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'
//types
import { inputProps, fetchDataProps } from '../types/queryProps'
import { Person } from '../types/queryProps'
//dev data
import { peopleData } from '../../public/fakePeopleData'

type variableTypes = {
  filter: string
  argument: string
}

export const useFetchData = () => {
  const [variables, setVariables] = useState<variableTypes>({
    filter: '',
    argument: '',
  })
  const [fakeData, setFakeData] = useState<Person[] | undefined>([])

  console.log(variables)

  const fakeDataQuery = ({ variables }: { variables: variableTypes }): Person[] | undefined => {
    if (!peopleData) return

    const fakePeopledata = peopleData.filter((person) => {
      if (variables.filter === '' && variables.argument === '') {
        return peopleData
      }
      const keys = Object.keys(person)
      return keys.some((key) => {
        return (
          person[key as keyof typeof person] === variables.filter ||
          person[key as keyof typeof person] === variables.argument
        )
      })
    })
    return fakePeopledata
  }

  useEffect(() => {
    setFakeData(fakeDataQuery({ variables }))
  }, [variables])

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

  return {
    fakeData,
    fetchDataResponse: { loading, error, data },
    fetchPeople,
  }
}

// filter: '_id'
// argument: '648337b44c67e4442634e492'
