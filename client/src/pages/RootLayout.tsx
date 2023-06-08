import { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return <div className="xl:mx-5 xl:grid xl:grid-cols-12 xl:grid-rows-6 ">{children}</div>
}
