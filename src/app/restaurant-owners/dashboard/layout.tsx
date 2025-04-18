import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata:Metadata = {
    title: "Dashboard"
}

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header urlToLogin="/restaurant-owners/login" />
            {children}
        </>
    )
}

export default layout