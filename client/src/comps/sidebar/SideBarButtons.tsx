type SideBarButtonsProps = {
  buttonText: string
  buttonIcon: string
  clickHandler: () => void
}

export const SideBarButtons = ({ buttonText, buttonIcon, clickHandler }: SideBarButtonsProps) => {
  return (
    <div onClick={() => clickHandler()}>
      <button>
        {buttonIcon}
        {buttonText}
      </button>
    </div>
  )
}
