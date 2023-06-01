// comps
import { GridSingleItem } from './GridSingleItem'
//data
import { FakeJsonProps } from '../../../../types/FakeJsonProps'

type GridProps = {
  posts: FakeJsonProps[]
}

export const Grid = ({ posts }: GridProps) => {
  return (
    <div className="grid-wrapper h-[32.5rem] overflow-auto">
      <div className="grid grid-cols-2 gap-1 p-1 lg:grid-cols-4">
        {posts &&
          posts.map((post, index: number) => (
            <GridSingleItem
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
