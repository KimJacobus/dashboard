//hooks
import { useEffect } from 'react'
//comps
import { Grid } from './mainpage-comps/grid/Grid'
import { List } from './mainpage-comps/list/List'
import { SelectionToast } from './mainpage-comps/SelectionToast'
import { MainPageHeader } from './mainpage-comps/mainpage-header/MainPageHeader'
//types
import { fetchDataProps, inputProps } from '@type/queryProps'

type _MainPageProps = {
  GridListToggle: boolean
  ButtonStates: boolean[]
  selection: string[]
  GridListToggler: () => void
  handleSelectionButton: (index: number) => void
  SelectionSelector: (id: string) => void
  fetchDataResponse: fetchDataProps
  fetchPeople: ({ input }: inputProps) => void
}

const _MainPage = ({ ...props }: _MainPageProps) => {
  useEffect(() => {
    props.fetchPeople({ input: { filter: '', argument: '' } })
  }, [])

  return (
    <div className="mainpage-wrapper col-span-8 row-span-5 flex justify-center">
      <div className="main-page mx-4 w-full rounded-lg bg-slate-50 p-1">
        <MainPageHeader {...props} />
        {props.GridListToggle ? <Grid {...props} /> : <List {...props} />}
        {props.selection.length > 0 && <SelectionToast selection={props.selection} />}
      </div>
    </div>
  )
}

export default _MainPage
