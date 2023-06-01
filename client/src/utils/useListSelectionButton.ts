import { useState } from 'react'

export const useListSelectionButton = () => {
  const [ButtonStates, setButtonStates] = useState<boolean[]>([])

  const handleSelectionButton = (index: number) => {
    console.log('select!')
    console.log(index)

    setButtonStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  console.log(ButtonStates)

  return { ButtonStates, handleSelectionButton }
}
