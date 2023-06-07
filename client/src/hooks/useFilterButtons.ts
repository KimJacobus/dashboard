import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'
//types
import { fetchPeopleProps } from '../types/inputProps'


export const useFilterButtons = () => {
  const [variables, setVariables] = useState<{}>({
    filter: '',
    argument: '',
  })

  const { loading, error, data } = useQuery(getPeopleQuery, {
    variables,
  })

  const fetchPeople = ({ input }: fetchPeopleProps) => {
    setVariables({
      filter: input?.filter || '',
      argument: input?.argument || '',
    })
    console.log('fetch people clicked!')
  }

  const FTest = () => {
    // setVariables({
    //   filter: input?.filter || '',
    //   argument: input?.argument || '',
    // })
    console.log('fetch people clicked!')
  }

  console.log(variables)
  return {
    fetchPplResponse: { loading, error, data },
    fetchPeople,
    setVariables,
    FTest,
  }
}
