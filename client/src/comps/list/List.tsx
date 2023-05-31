import { FakeJsonProps } from '../../types/FakeJsonProps'
import { ListSingleItem } from './ListSingleItem'

export const List = ({ posts }: FakeJsonProps) => {
  return (
    <div className="grid-wrapper h-[32.5rem] overflow-auto">
      <div className="grid grid-cols-1 gap-y-2 px-2">
        {posts &&
          posts.map((post, index: number) => (
            <ListSingleItem
              id={post.id}
              key={index}
              comment={post.comments}
              image={post.image}
            />
          ))}
      </div>
    </div>
  )
}
