//comps
import { Grid } from './comps/grid/Grid'
import { List } from './comps/list/List'
import _Nav from '../../comps/navbar/_Nav'
import { SelectionToast } from './comps/SelectionToast'
//data
import { posts } from '../../data/fakejson'
import { MainPageHeader } from './comps/mainpage-header/MainPageHeader'

type _MainPageProps = {
  GridListToggle: boolean
  ButtonStates: boolean[]
  selection: number[]
  GridListToggler: () => void
  handleSelectionButton: (index: number) => void
  SelectionSelector: (id: number) => void
}

const _MainPage = ({
  GridListToggle,
  GridListToggler,
  selection,
  ButtonStates,
  handleSelectionButton,
  SelectionSelector,
}: _MainPageProps) => {
  return (
    <div className="mainpage-wrapper flex justify-center">
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
            SelectionSelector={SelectionSelector}
            posts={posts}
          />
        )}
        {Selection.length > 0 && <SelectionToast selection={selection} />}
      </div>
    </div>
  )
}

export default _MainPage
