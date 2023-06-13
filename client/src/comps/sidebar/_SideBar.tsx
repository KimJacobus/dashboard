import { Link } from 'react-router-dom'
import { SideBarButtons } from './SideBarButtons'
import { SideBarButtonsInput } from './SideBarButtonsInput'

export const _SideBar = () => {
  return (
    <div className="sidebar-grid-wrapper col-span-2 col-start-2 row-span-6 hidden rounded-lg bg-slate-50 lg:mt-4 xl:block">
      <div className="sidebar-flexbox flex flex-col font-thin">
        <Link to="/">
          <h2 className="h-28 ps-4 pt-7 text-6xl">Dash</h2>
        </Link>
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
