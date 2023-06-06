import { useLazyQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'

type fetchPeopleProps = {
  input?: {
    filter?: string
    argument?: string
  }
}

export const useFilterButtons = () => {
  const [getPeople, { loading, error, data }] = useLazyQuery(getPeopleQuery)

  const FetchPeople = ({ input }: fetchPeopleProps) => {
    const variables = {
      filter: input?.filter || '',
      argument: input?.argument || '',
    }
    console.log('this' + variables)

    getPeople({ variables })
  }

  return { fetchPplResponse: { loading, error, data }, FetchPeople }
}
