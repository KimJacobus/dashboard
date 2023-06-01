// comps
import { GridSingleItem } from './GridSingleItem'
import { GridSelectionButton } from '../list/ListSelectionButton'

//data
import { FakeJsonProps } from '../../types/FakeJsonProps'

export const Grid = ({ posts }: FakeJsonProps) => {
  return (
    <div className="grid-wrapper h-[32.5rem] overflow-auto">
      <div className="grid grid-cols-2 gap-1 p-1">
        {posts &&
          posts.map((post, index: number) => (
            <>
              <GridSingleItem
                id={post.id}
                key={index}
                comment={post.comments}
                image={post.image}
              />
            </>
          ))}
      </div>
    </div>
  )
}
