//data
import { FakeJsonProps } from '../../../../types/FakeJsonProps'
//comps
import { GridListButton } from '../../../../comps/navbar/gridlist-toggle/GridListButton'

type MainPageHeader = {
  GridListToggle: boolean
  GridListToggler: () => void
  posts: FakeJsonProps[]
}

export const MainPageHeader = ({ posts, GridListToggle, GridListToggler }: MainPageHeader) => {
  return (
    <>
      <div className="main-info flex w-full cursor-default justify-between px-2 pt-8">
        <div className="flex flex-col">
          <h2 className="text-6xl font-thin">{GridListToggle ? 'Grid' : 'List'}</h2>
          <p className="ps-1 font-mono text-sm font-bold">{posts.length} Total</p>
        </div>
        <GridListButton GridListToggle={GridListToggle} GridListToggler={GridListToggler} />
      </div>

      <hr className="my-2 w-full"></hr>
    </>
  )
}
