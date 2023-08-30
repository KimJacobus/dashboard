import { Person } from '@type/queryProps'
import { useEffect, useState } from 'react'

type SingleModelProps = {
  data: {
    people: [Person]
  }
}

export const SingleModel = ({ data }: SingleModelProps) => {
  const filteredData = data.people.map((person: Person) => {
    const { _id, __typename, ...rest } = person
    return rest
  })

  return (
    <>
      {filteredData && filteredData[0] && (
        <div className="single-model flex flex-col items-center gap-10 p-10 font-mono">
          <img className="mb-auto w-40" src={filteredData[0].pictures as string}></img>
          <ul>
            {Object.keys(filteredData[0]).map((key) => (
              <li key={key}>
                <b>{key}:</b> {filteredData[0][key as keyof (typeof filteredData)[0]]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
