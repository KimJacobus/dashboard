import { fetchDataProps, Person, singleDataProps } from '@type/queryProps'
//comps
import { ListSingleItem } from './ListSingleItem'
import { ListSelectionButton } from './ListSelectionButton'
//dev data
import { peopleData } from '@data/fakePeopleData'

type ListProps = {
  ButtonStates: boolean[]
  handleSelectionButton: (index: number) => void
  fetchDataResponse: fetchDataProps
  SelectionSelector: (id: string) => void
  fakeData?: Person[]
}

export const List = ({ ...props }: ListProps) => {
  const { data } = props.fetchDataResponse // data.people.map for mapping out actual data
  // const data = props.fakeData
  console.log(data)

  return (
    <div className="flex-wrapper flex h-[33rem] justify-center overflow-auto lg:h-[35rem]">
      <div className="list-container lg:grid lg:grid-cols-2 lg:gap-2">
        {data &&
          data.people.map((person: Person, index: number) => (
            <div key={index} className="flex items-center gap-2 py-2">
              <ListSelectionButton
                {...props}
                index={index}
                key={person.firstname}
                id={person._id as string}
              />

              <ListSingleItem
                id={person._id as string}
                key={index}
                firstname={person.firstname}
                lastname={person.lastname}
                pictures={person.pictures}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
