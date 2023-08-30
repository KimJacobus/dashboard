import { gql } from '@apollo/client'

export const PEOPLE = gql`
  query GetPeople($filter: String, $argument: String) {
    people(filter: $filter, argument: $argument) {
      _id
      gender
      firstname
      lastname
      height
      haircolor
      weight
      skincolor
      ethnicity
      language
      city
      address
      phoneNumber
      email
      pictures
      shoeSize
      availability
      waistSize
      age
    }
  }
`
