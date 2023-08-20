// comps
import { GridSingleItem } from './GridSingleItem'
//types
import { fetchDataProps } from '../../../../types/queryProps'
import { Person } from '../../../../types/queryProps'
//dev data 
import { peopleData } from '../../../../data/fakePeopleData'

type GridProps = {
  fetchDataResponse: fetchDataProps
  SelectionSelector: (id: string) => void
}

export const Grid = ({ fetchDataResponse }: GridProps) => {
  // const { data } = fetchDataResponse
  const  data  = peopleData

  return (
    <div className="grid-wrapper h-[33rem] overflow-auto lg:h-[35rem]">
      <div className="grid grid-cols-2 gap-3 p-1 lg:grid-cols-4">
        {data &&
          data.map((person: Person, index: number) => (
            <GridSingleItem
              key={index}
              id={person._id as string}
              firstname={person.firstname}
              lastname={person.lastname}
              pictures={person.pictures}
            />
          ))}
      </div>
    </div>
  )
}
