import { useState } from 'react'

export const useSelection = () => {
  const [selection, setSelection] = useState<number[]>([])

  const SelectionSelector = (id: number) => {
    setSelection((prevStates) => {
      // Check if the ID already exists in the selection array
      const isSelected = prevStates.includes(id)
      // If the ID is already selected, remove it from the array
      if (isSelected) {
        return prevStates.filter((selectedId) => selectedId !== id)
      }
      // If the ID is not selected, add it to the array
      return [...prevStates, id]
    })
  }

  return { SelectionSelector, selection }
}
