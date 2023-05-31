type AccountIconProps = {
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountIcon = ({ setAccountSideBarToggle }: AccountIconProps) => {
  return (
    <div
      className="circle h-10 w-10 rounded-full bg-gray-600"
      onClick={() => setAccountSideBarToggle((prevState) => !prevState)}
    ></div>
  )
}
