import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata:Metadata = {
    title: "Submit Proof"
}

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default layout