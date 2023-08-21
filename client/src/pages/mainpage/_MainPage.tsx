import { useState } from 'react'

//comps
import { Grid } from './comps/grid/Grid'
import { List } from './comps/list/List'
import _Nav from '../../comps/navbar/_Nav'
import { SelectionToast } from './comps/SelectionToast'
//data
import { MainPageHeader } from './comps/mainpage-header/MainPageHeader'
import { peopleData } from '../../data/fakePeopleData'
//types
import { fetchDataProps, inputProps } from '../../types/queryProps'
import { Person } from '../../types/queryProps'
import { useEffect } from 'react'

type _MainPageProps = {
  GridListToggle: boolean
  ButtonStates: boolean[]
  selection: string[]
  GridListToggler: () => void
  handleSelectionButton: (index: number) => void
  SelectionSelector: (id: string) => void
  fetchDataResponse: fetchDataProps
  fetchPeople: ({ input }: inputProps) => void
  fakeData?: Person[]
}

const _MainPage = ({
  GridListToggle,
  GridListToggler,
  selection,
  ButtonStates,
  handleSelectionButton,
  SelectionSelector,
  fetchDataResponse,
  fetchPeople,
  fakeData,
}: _MainPageProps) => {

  useEffect(() => {
    fetchPeople({ input: { filter: '', argument: '' } })
  }, [])


  return (
    <div className="mainpage-wrapper col-span-8 row-span-5 flex justify-center">
      <div className="main-page mx-4 w-full rounded-lg bg-slate-50 p-1">
        <MainPageHeader
          fetchDataResponse={fetchDataResponse}
          GridListToggle={GridListToggle}
          GridListToggler={GridListToggler}
        />

        {GridListToggle ? (
          <Grid fetchDataResponse={fetchDataResponse} SelectionSelector={SelectionSelector} fakeData={fakeData}/>
        ) : (
          <List
            ButtonStates={ButtonStates}
            handleSelectionButton={handleSelectionButton}
            SelectionSelector={SelectionSelector}
            fetchDataResponse={fetchDataResponse}
          />
        )}
        {selection.length > 0 && <SelectionToast selection={selection} />}
      </div>
    </div>
  )
}

export default _MainPage
