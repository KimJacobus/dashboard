import { useRef, useEffect } from 'react'
import { gsap, Circ } from 'gsap'

//comps
import { DarkModeButton } from './DarkModeButton'

type AccountSideBarProps = {
  DarkModeToggle: boolean
  DarkModeToggler: () => void
  AccountSideBarToggle: boolean
  setAccountSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountSideBar = ({
  DarkModeToggle,
  DarkModeToggler,
  AccountSideBarToggle,
  setAccountSideBarToggle,
}: AccountSideBarProps) => {
  const componentRef = useRef(null)

  useEffect(() => {
    if (AccountSideBarToggle) {
      gsap.from(componentRef.current, {
        x: '0',
        opacity: '0',
        duration: 0.1,
        ease: Circ.easeIn,
      })
      gsap.to(componentRef.current, {
        x: '1',
        opacity: '1',
        duration: 0.1,
        ease: Circ.easeOut,
      })
    }
  }, [AccountSideBarToggle])

  return (
    <div
      ref={componentRef}
      className={`account-sidebar absolute z-10 m-4 h-[94%] w-[92%] translate-x-[90%] rounded-lg bg-indigo-100 p-2 outline outline-2 outline-indigo-500 transition lg:w-[50%]`}
      onClick={() => setAccountSideBarToggle((prevState) => !prevState)}
    >
      <div className="flex w-full flex-col items-center gap-4 pt-2">
        <div className="account-button h-20 w-20 rounded-full bg-slate-800"></div>
        <h2 className="text-2xl">username</h2>
        <hr className="h-[2px] w-full bg-indigo-500 text-xl mb-5"></hr>
        <DarkModeButton
          
          DarkModeToggler={DarkModeToggler}
          DarkModeToggle={DarkModeToggle}
        />
        <h2 className="text-2xl mt-20">log-out</h2>
      </div>
    </div>
  )
}
