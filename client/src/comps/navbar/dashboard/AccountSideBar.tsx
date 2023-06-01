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
      <h2>account dashboard</h2>
      <p>darkmode</p>
      <p>info</p>
      <p>change pic</p>
      <p>log out</p>
    </div>
  )
}
