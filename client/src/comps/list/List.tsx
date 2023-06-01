import { FakeJsonProps } from '../../types/FakeJsonProps'
//comps
import { ListSingleItem } from './ListSingleItem'
import { ListSelectionButton } from './ListSelectionButton'

export const List = ({ posts }: FakeJsonProps) => {
  return (
    <div className="flex-wrapper flex justify-center overflow-y-scroll">
      <div className="list-container">
        {posts &&
          posts.map((post, index: number) => (
            <div className="flex items-center gap-2 py-2">
              <ListSelectionButton />

              <ListSingleItem
                id={post.id}
                key={index}
                comment={post.comments}
                image={post.image}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
