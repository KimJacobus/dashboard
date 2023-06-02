//comps
import { AccountIcon } from './AccountIcon'

type AccountSideBarProps = {
  AccountSideBarToggle: boolean
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountSideBar = ({
  AccountSideBarToggle,
  setAccountSideBarToggle,
}: AccountSideBarProps) => {
  return (
    <div
      className={`absolute right-0 top-0 z-10 m-4 h-[94%] w-[92%] translate-x-0 rounded-lg bg-indigo-100 p-2 outline outline-2 outline-indigo-500 transition lg:w-[50%] ${
        AccountSideBarToggle ? '' : 'translate-x-[105%]'
      }`}
      onClick={() => setAccountSideBarToggle((prevState) => !prevState)}
    >
      <div className="flex w-full flex-col gap-4 items-center">
        <div className="account-button h-20 w-20 rounded-full bg-slate-800"></div>
        <h2 className="text-2xl">username</h2>
        <hr className="h-[2px] w-full bg-indigo-500 text-xl"></hr>
      </div>
    </div>
  )
}
