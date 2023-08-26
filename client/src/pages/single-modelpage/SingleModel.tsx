import { fetchDataProps, singleDataProps, Person } from '@type/queryProps'

export const SingleModel = ({ data }: { data: Person }) => {
  // Filter out the _id property, not entirely sure if this is worth it

  console.log(data)

  return (
    <div className="single-model flex flex-col items-center gap-10 p-10 font-mono">
      <img className="mb-auto w-40" src={data.pictures as string}></img>
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>
            <b>{key}:</b> {data[key as keyof Person]}
          </li>
        ))}
      </ul>
    </div>
  )
}

//fakedata
// const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => key !== '_id'))
