import type {Metadata} from "next";
import Header from "@/components/dashboard/Header";


export const metadata:Metadata = {
    title: "Dashboard"
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