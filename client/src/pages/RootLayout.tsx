import { ReactNode } from "react";

type RootLayoutProps = {
    children: ReactNode
}

export const RootLayout = ({children}:RootLayoutProps) => {
return (
 
<div className="lg:grid lg:grid-cols-12 lg:grid-rows-6 lg:mx-5 ">{children}</div>
 
);
}