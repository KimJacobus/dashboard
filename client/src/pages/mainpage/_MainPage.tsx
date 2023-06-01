//comps
import { Grid } from './comps/grid/Grid'
import { List } from './comps/list/List'
import _Nav from '../../comps/navbar/_Nav'
//data
import { posts } from '../../data/fakejson'
import { MainPageHeader } from './comps/mainpage-header/MainPageHeader'

type _MainPageProps = {
  GridListToggle: boolean
  ButtonStates: boolean[]
  GridListToggler: () => void
  handleSelectionButton: (index: number) => void
}

const _MainPage = ({
  GridListToggle,
  GridListToggler,
  ButtonStates,
  handleSelectionButton,
}: _MainPageProps) => {
  return (
    <div className="mainpage-wrapper flex w-screen justify-center">
      <div className="main-page mx-4 w-full rounded-lg bg-slate-50 p-2 lg:max-w-7xl">
        <MainPageHeader
          posts={posts}
          GridListToggle={GridListToggle}
          GridListToggler={GridListToggler}
        />

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
