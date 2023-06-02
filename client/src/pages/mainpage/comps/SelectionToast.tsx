import { useRef, useEffect, useState } from 'react'
import { gsap, Circ } from 'gsap'

type SelectionToast = {
  Selection: number[]
}

export const SelectionToast = ({ Selection }: SelectionToast) => {
  const [toastAnimation, setToastAnimation] = useState<boolean>(true)
  const componentRef = useRef(null)

  useEffect(() => {
    if (Selection.length === 1 && toastAnimation) {
      gsap.from(componentRef.current, {
        x: '100',
        duration: 0.5,
        ease: Circ.easeIn,
      })
      gsap.to(componentRef.current, {
        x: '1',
        duration: 0.5,
        ease: Circ.easeOut,
      })
      setToastAnimation(false)
    } else if (Selection.length === 0 && !toastAnimation) {
      setToastAnimation(true)
    }
  }, [Selection])

  return (
    <div
      ref={componentRef}
      className="selection-toast absolute bottom-5 right-4 flex h-20 items-center justify-center rounded-lg bg-indigo-100 p-5 outline outline-1 outline-indigo-400"
    >
      <div>
        <p className="font-mono text-lg">{Selection.length}</p>
      </div>
    </div>
  )
}
