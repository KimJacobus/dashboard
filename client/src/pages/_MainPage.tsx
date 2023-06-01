//comps
import { Grid } from '../comps/grid/Grid'
import { List } from '../comps/list/List'
import _Nav from '../comps/navbar/_Nav'
//data
import { posts } from '../data/fakejson'

type _MainPageProps = {
  GridListToggle: boolean
  ButtonStates: boolean[]
  handleSelectionButton: (index: number) => void
}

const _MainPage = ({
  GridListToggle,
  ButtonStates,
  handleSelectionButton,
}: _MainPageProps) => {
  return (
    <div className="mainpage-wrapper flex w-screen justify-center">
      <div className="main-page mx-4 w-full rounded-lg bg-slate-50 p-2 lg:max-w-7xl">
        <div className="main-info flex justify-between pt-16">
          <h2 className="text-7xl">List!</h2>
          <h2 className="text-3xl">Total</h2>
          <h2 className="text-3xl">List!</h2>
        </div>

        {GridListToggle ? (
          <Grid posts={posts} />
        ) : (
          <List
            ButtonStates={ButtonStates}
            handleSelectionButton={handleSelectionButton}
            posts={posts}
          />
        )}
      </div>
    </div>
  )
}

export default _MainPage
