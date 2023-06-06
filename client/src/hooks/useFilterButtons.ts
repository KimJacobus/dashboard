import { useQuery } from '@apollo/client'
import { getPeopleQuery } from '../queries/queries'

type fetchPeopleProps = {
  input?: {
    filter?: string
    argument?: string
  }
}

export const useFilterButtons = ({ input }: fetchPeopleProps) => {
  const { loading, error, data } = useQuery(getPeopleQuery, {
    variables: {
      filter: input?.filter || '',
      argument: input?.argument || '',
    },
  })

  const FetchPeople =() => {

  }
  return { fetchPplResponse: {loading, error, data}, FetchPeople }
}
