import { fetchDataProps, singleDataProps, Person } from '@type/queryProps'

export const SingleModel = ({ data }: { data: Person }) => {
  // Filter out the _id property, not entirely sure if this is worth it

  const filteredData = Object.fromEntries(Object.entries(data).filter(([key]) => key !== '_id'))

  return (
    <div className="single-model flex flex-col items-center gap-10 p-10 font-mono">
      <img className="mb-auto w-40" src={filteredData.pictures as string}></img>
      <ul>
        {Object.keys(filteredData).map((key) => (
          <li key={key}>
            <b>{key}:</b> {filteredData[key as keyof Person]}
          </li>
        ))}
      </ul>
    </div>
  )
}
