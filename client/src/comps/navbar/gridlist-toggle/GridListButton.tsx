//hooks

type GridListButtonProps = {
  GridListToggler: () => void
}

export const GridListButton = ({ GridListToggler }: GridListButtonProps) => {
  return <button onClick={() => GridListToggler()}>toggle</button>
}
