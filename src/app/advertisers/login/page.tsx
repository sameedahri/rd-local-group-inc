import LoginCard from "@/components/login/LoginCard";
import { ADVERTISERS_DASHBOARD } from "@/utils/pages-routes";

const page = () => {
    return (
        <main className="bg-loginBg flex justify-center items-center min-h-screen">
           <LoginCard urlToDashboard={ADVERTISERS_DASHBOARD} postLoginDataUrl="/posts" />
        </main>
    )
}

export default page