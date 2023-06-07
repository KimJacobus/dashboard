import { useState } from 'react'

import { useQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'

type fetchPeopleProps = {
  input: {
    filter?: string
    argument?: string
  }
}

export const useFilterButtons = () => {
  const [variables, setVariables] = useState<fetchPeopleProps['input']>({
    filter: '',
    argument: '',
  })

  const { loading, error, data } = useQuery(getPeopleQuery, {
    variables,
  })

  const FetchPeople = ({ input }: fetchPeopleProps) => {
    setVariables({
      filter: input?.filter || '',
      argument: input?.argument || '',
    })
  }

  console.log(variables)
  return {
    fetchPplResponse: { loading, error, data },
    FetchPeople,
    setVariables,
  }
}
