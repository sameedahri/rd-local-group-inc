import type {Metadata} from "next";


export const metadata:Metadata = {
  title: "Restaurant Owners"
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default layout