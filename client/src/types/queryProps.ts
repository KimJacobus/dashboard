import { ApolloError } from '@apollo/client'

export type inputProps = {
  input?: {
    filter?: string
    argument?: string
  }
}

export type fetchDataProps = {
  loading?: boolean
  error?: ApolloError
  data?: {
    people: Person[]
  }
}

export type singleDataProps = {
  loading?: boolean
  error?: ApolloError
  data: {
    people: Person[]
  }
}

export type Person = {
  _id?: string
  firstname: string
  lastname: string
  gender: string
  height: string
  haircolor: string
  weight: string
  skincolor: string
  ethnicity: string
  language: string
  city: string
  address: string
  phoneNumber: string
  email: string
  pictures: string
  shoeSize: string
  waistSize: string
  age: string
  availability: boolean
}
