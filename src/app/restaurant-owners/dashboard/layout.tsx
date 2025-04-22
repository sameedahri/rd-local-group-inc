import type {Metadata} from "next";
import Header from "@/components/common/Header";
import { RESTAURANTOWNERS_LOGIN } from "@/utils/pages-routes";

export const metadata:Metadata = {
    title: "Dashboard"
}

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header urlToLogin={RESTAURANTOWNERS_LOGIN} isRestaurantOwner={true} />
            {children}
        </>
    )
}

export default layout