//comps
import { GridListButton } from '../../../../comps/navbar/gridlist-toggle/GridListButton'
//types
import { fetchDataProps } from '../../../../types/queryProps'

type MainPageHeader = {
  GridListToggle: boolean
  GridListToggler: () => void
  fetchDataResponse: fetchDataProps
}

export const MainPageHeader = ({ fetchDataResponse, GridListToggle, GridListToggler }: MainPageHeader) => {
  const { data } = fetchDataResponse

  return (
    <>
      <div className="main-info flex w-full cursor-default justify-between px-2 pt-8">
        <div className="flex flex-col">
          <h2 className="text-6xl font-thin">{GridListToggle ? 'Grid' : 'List'}</h2>
          {data && <p className="ps-1 font-mono text-sm font-bold">Total {data.people.length} </p>}
        </div>
        <GridListButton GridListToggle={GridListToggle} GridListToggler={GridListToggler} />
      </div>
      <hr className="my-2 w-full"></hr>
    </>
  )
}
