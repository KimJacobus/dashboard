import { useCallback, useState } from 'react'

export const useGridListToggle = (initState = false) => {
  const [GridListToggle, setGridListToggle] = useState<boolean>(initState)

  const GridListToggler = useCallback(() => {
    setGridListToggle((prevState) => !prevState)
  }, [])

  return { GridListToggle, GridListToggler }
}
