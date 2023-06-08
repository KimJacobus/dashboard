type SideBarButtonsProps = {
  buttonText: string
  buttonIcon: string
}

export const SideBarButtons = ({ buttonText, buttonIcon }: SideBarButtonsProps) => {
  return (
    <div>
      <button>
        {buttonIcon}
        {buttonText}
      </button>
    </div>
  )
}
