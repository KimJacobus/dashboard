type AccountIconProps = {
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountIcon = ({ setAccountSideBarToggle }: AccountIconProps) => {
  return (
    <div
      className="circle h-10 w-10 cursor-pointer rounded-full bg-slate-800"
      onClick={() => setAccountSideBarToggle((prevState) => !prevState)}
    ></div>
  )
}
