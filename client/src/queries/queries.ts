import { gql } from '@apollo/client'

export const getPeopleQuery = gql`
  query GetPeople($filter: String, $argument: String) {
    people(filter: $filter, argument: $argument) {
      _id
      gender
      picture
      availability
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
      waistSize
      age
    }
  }
`

export const PEOPLE = gql`
  query GetPeople {
    people {
      _id
      gender
      picture
      availability
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
      waistSize
      age
    }
  }
`
