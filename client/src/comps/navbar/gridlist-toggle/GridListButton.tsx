type GridListButtonProps = {
  GridListToggle: boolean
  GridListToggler: () => void
}

export const GridListButton = ({
  GridListToggle,
  GridListToggler,
}: GridListButtonProps) => {
  return (
    <div className="flex flex-col">
      <div
        onClick={() => GridListToggler()}
        className={`gl-toggle-wrapper flex h-8 w-16 cursor-pointer rounded-full bg-gray-200 outline outline-1 outline-gray-400`}
      >
        <div
          className={`gl-toggle-button h-full w-8 rounded-full bg-slate-800  outline outline-4 -outline-offset-4 outline-slate-400 ${
            GridListToggle
              ? 'translate-x-full transform transition-transform'
              : 'translate-x-0 transform transition-transform'
          }`}
        ></div>
      </div>
      <p className="pt-1 font-mono text-xs">list/grid</p>
    </div>
  )
}
