import { useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPeopleQuery } from '../queries/queries'
import { useFetchData } from '../hooks/useFetchData'

const _queryTest = ({ fetchPplResponse, FTest }: any) => {
  const { loading, error, data } = fetchPplResponse

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(data)

  return (
    <ul id="book-list">
      {data &&
        data.people.map((person: any) => (
          <div className="person" key={person._id}>
            <hr />
            <li key={person._id}>{person.name}</li>
            <p>{person.gender}</p>
            <img key={person._id} src={person.pictures} alt="Person" />
          </div>
        ))}
    </ul>
  )
}

export default _queryTest
