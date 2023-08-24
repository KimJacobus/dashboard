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
    people: []
  }
}

export type Person = { [key: string]: string } & {
  availability: boolean
}
