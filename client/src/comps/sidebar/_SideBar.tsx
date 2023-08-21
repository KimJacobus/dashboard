//hooks
import { useNavigate } from 'react-router-dom'
//comps
import { SideBarButtons } from './SideBarButtons'
import { SideBarButtonsInput } from './SideBarButtonsInput'
//types
import { inputProps } from '../../types/queryProps'
//env
import { routerBasePath } from '../../routerBasePath'

export const _SideBar = ({ fetchPeople }: { fetchPeople: ({ input }: inputProps) => void }) => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate(routerBasePath)
    fetchPeople({ input: { filter: '', argument: '' } })
  }

  return (
    <div className="sidebar-grid-wrapper col-span-2 col-start-2 row-span-6 hidden rounded-lg bg-slate-50 lg:mt-4 xl:block">
      <div className="sidebar-flexbox flex flex-col font-thin">
        <h2 className="h-28 ps-4 pt-7 text-6xl" onClick={() => clickHandler()}>
          Dash
        </h2>
        <hr className="my-2 w-full"></hr>
        <div className="buttons-wrapper flex flex-col gap-14 ps-5 pt-9">
          {SideBarButtonsInput.map((button, index) => (
            <SideBarButtons key={index} buttonText={button.text} buttonIcon={button.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
