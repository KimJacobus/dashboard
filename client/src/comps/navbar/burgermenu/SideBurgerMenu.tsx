type SideBurgerMenuProps = {
  setSearchModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideBurgerMenu = ({
  setSearchModalToggle: setBurgerToggle,
}: SideBurgerMenuProps) => {
  return (
    <div className="SideBurgerMenu absolute">
      <div
        className="ex cursor-pointer text-9xl"
        onClick={() => setBurgerToggle((prevState) => !prevState)}
      >
        X
      </div>
      <h2 className="text-9xl">SideBurgerMenu</h2>
    </div>
  )
}
