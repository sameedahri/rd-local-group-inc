import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata:Metadata = {
    title: "Add User"
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header urlToLogin="" />
        {children}
    </>
  )
}

export default layout