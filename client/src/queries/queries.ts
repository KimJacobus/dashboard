import { gql } from '@apollo/client'

export const getPeopleQuery = gql`
  query GetPeople($filter: String, $argument: String) {
    people(filter: $filter, argument: $argument) {
      name
      id
      gender
      picture
      availability
    }
  }
`


