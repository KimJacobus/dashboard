import { FakeJsonProps } from '../../types/FakeJsonProps'
//comps
import { ListSingleItem } from './ListSingleItem'
import { ListSelectionButton } from './ListSelectionButton'

type ListProps = {
  ButtonStates: boolean[]
  handleSelectionButton: (index: number) => void
  posts: FakeJsonProps[]
}

export const List = ({
  posts,
  ButtonStates,
  handleSelectionButton,
}: ListProps) => {
  return (
    <div className="flex-wrapper flex justify-center overflow-y-scroll">
      <div className="list-container">
        {posts &&
          posts.map((post, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 py-2"
              onClick={() => handleSelectionButton(index)}
            >
              <ListSelectionButton ButtonStates={ButtonStates} index={index} />

              <ListSingleItem
                id={post.id}
                comment={post.comments}
                image={post.image}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
