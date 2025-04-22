import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata:Metadata = {
    title: "Add Extra Staff"
}

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header urlToLogin="/advertisers/login" isRestaurantOwner={false} />
            {children}
        </>
    )
}

export default layout