import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata:Metadata = {
    title: "Add Revision"
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