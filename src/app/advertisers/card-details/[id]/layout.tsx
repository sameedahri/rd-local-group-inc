import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata:Metadata = {
    title: "Card Details"
};


const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header urlToLogin="/advertisers/login" isRestaurantOwner={false} />
            {children}
        </>
    )
}

export default layout