import { FakeJsonProps } from '../../../../types/FakeJsonProps'

//comps
import { ListSingleItem } from './ListSingleItem'
import { ListSelectionButton } from './ListSelectionButton'

type ListProps = {
  ButtonStates: boolean[]
  handleSelectionButton: (index: number) => void
  posts: FakeJsonProps[]
  SelectionSelector: (id: number) => void
}

export const List = ({ posts, ButtonStates, handleSelectionButton, SelectionSelector }: ListProps) => {
  return (
    <div className="flex-wrapper flex h-[32.5rem] justify-center overflow-auto">
      <div className="list-container lg:grid lg:grid-cols-2 lg:gap-2">
        {posts &&
          posts.map((post, index: number) => (
            <div key={index} className="flex items-center gap-2 py-2">
              <ListSelectionButton
                ButtonStates={ButtonStates}
                index={index}
                id={post.id}
                handleSelectionButton={handleSelectionButton}
                SelectionSelector={SelectionSelector}
              />

              <ListSingleItem id={post.id} comment={post.comments} image={post.image} />
            </div>
          ))}
      </div>
    </div>
  )
}
