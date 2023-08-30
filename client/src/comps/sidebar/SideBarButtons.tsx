type SideBarButtonsProps = {
  buttonText: string
  buttonIcon: string 
  pathHandler: (buttonText: string) => void
}

export const SideBarButtons = ({ buttonText, buttonIcon, pathHandler }: SideBarButtonsProps) => {
  return (
    <div onClick={() => pathHandler(buttonText)}>
      <button>
        {buttonIcon}
        {buttonText}
      </button>
    </div>
  )
}
