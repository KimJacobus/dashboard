import { useState } from 'react'

export const useListSelectionButton = () => {
  const [ButtonStates, setButtonStates] = useState<boolean[]>([])

  const handleSelectionButton = (index: number) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return { ButtonStates, handleSelectionButton }
}
