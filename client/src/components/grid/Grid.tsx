import { SingleItem } from './SingleItem'

import { posts } from '../../data/fakejson'

export const Grid = () => {
  return (
    <div className="grid-wrapper h-[32.5rem] overflow-auto">
      <div className="grid grid-cols-2 gap-1 p-1">
        {posts &&
          posts.map((post) => (
            <SingleItem
              id={post.id}
              comment={post.comments}
              image={post.image}
            />
          ))}
      </div>
    </div>
  )
}
