type AccountSideBarProps = {
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountSideBar = ({
  setAccountSideBarToggle,
}: AccountSideBarProps) => {
  return (
    <div
      className="absolute left-0 top-0 h-screen w-screen bg-slate-500"
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
