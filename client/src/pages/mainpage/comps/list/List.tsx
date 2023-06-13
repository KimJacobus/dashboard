import { fetchDataProps, Person } from '../../../../types/queryProps'

//comps
import { ListSingleItem } from './ListSingleItem'
import { ListSelectionButton } from './ListSelectionButton'

type ListProps = {
  ButtonStates: boolean[]
  handleSelectionButton: (index: number) => void
  fetchDataResponse: fetchDataProps
  SelectionSelector: (id: string) => void
}

export const List = ({
  ButtonStates,
  handleSelectionButton,
  SelectionSelector,
  fetchDataResponse,
}: ListProps) => {
  const { data } = fetchDataResponse

  return (
    <div className="flex-wrapper flex h-[33rem] justify-center overflow-auto lg:h-[35rem]">
      <div className="list-container lg:grid lg:grid-cols-2 lg:gap-2">
        {data &&
          data.people.map((person: Person, index: number) => (
            <div key={index} className="flex items-center gap-2 py-2">
              <ListSelectionButton
                ButtonStates={ButtonStates}
                index={index}
                key={person.firstname}
                id={person._id}
                handleSelectionButton={handleSelectionButton}
                SelectionSelector={SelectionSelector}
              />

              <ListSingleItem
                id={person._id}
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
