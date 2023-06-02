type DarkModeButtonProps = {
  DarkModeToggle: boolean
  DarkModeToggler: () => void
}

export const DarkModeButton = ({
  DarkModeToggle,
  DarkModeToggler,
}: DarkModeButtonProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={`gl-toggle-wrapper flex h-8 w-16 cursor-pointer rounded-full bg-gray-200 outline outline-1 outline-gray-400`}
        onClick={() => DarkModeToggler}
      >
        <div
          className={`gl-toggle-button h-full w-8 rounded-full bg-slate-800  outline outline-4 -outline-offset-4 outline-slate-400 ${
            DarkModeToggle
              ? 'translate-x-full transform transition-transform'
              : 'translate-x-0 transform transition-transform'
          }`}
        ></div>
      </div>
      <p className="pt-1 font-mono text-xs">dark/light</p>
    </div>
  )
}
