import type {Metadata} from "next";


export const metadata:Metadata = {
  title: "Admins List"
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default layout