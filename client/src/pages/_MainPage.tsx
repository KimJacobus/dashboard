//comps
import { Grid } from '../comps/grid/Grid'
import { List } from '../comps/list/List'
import _Nav from '../comps/navbar/_Nav'
//data
import { posts } from '../data/fakejson'

type _MainPageProps = {
  GridListToggle: boolean
}

const _MainPage = ({ GridListToggle }: _MainPageProps) => {
  return (
    <>
      <div className="main-page m-2 rounded-lg bg-slate-400 p-3 ">
        {GridListToggle ? <Grid posts={posts} /> : <List posts={posts} />}
      </div>
    </>
  )
}

export default _MainPage
