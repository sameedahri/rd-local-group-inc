import LoginCard from "@/components/login/LoginCard";
import {RESTAURANTOWNERS_DASHBOARD} from "@/utils/pages-routes";
import { OWNER_LOGIN } from "@/utils/api-urls";


const page = () => {
    return (
        <main className="bg-loginBg flex justify-center items-center min-h-screen">
           <LoginCard urlToDashboard={RESTAURANTOWNERS_DASHBOARD} postLoginDataUrl={OWNER_LOGIN} isOwner={true} />
        </main>
    )
}

export default page