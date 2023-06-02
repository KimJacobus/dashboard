import { useCallback, useState } from 'react'

export const useDarkModeToggle = (initState = false) => {
  const [DarkModeToggle, setDarkModeToggle] = useState<boolean>(initState)

  const DarkModeToggler = useCallback(() => {
    setDarkModeToggle((prevState) => !prevState)
  }, [])

  return { DarkModeToggle, DarkModeToggler }
}
