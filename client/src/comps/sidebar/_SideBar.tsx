import { SideBarButtons } from './SideBarButtons'
import { SideBarButtonsInput } from './SideBarButtonsInput'

export const _SideBar = () => {
  return (
    <div className="sidebar-grid-wrapper col-span-2 col-start-2 row-span-6 hidden rounded-lg bg-slate-50 lg:mt-4 xl:block">
      <div className="sidebar-flexbox flex flex-col font-thin">
        <h2 className="h-28 ps-4 pt-7 text-6xl">Dash</h2>
        <hr className="my-2 w-full"></hr>
        <div className="buttons-wrapper flex flex-col gap-14 ps-5 pt-9">
          {SideBarButtonsInput.map((button) => (
            <SideBarButtons buttonText={button.text} buttonIcon={button.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
