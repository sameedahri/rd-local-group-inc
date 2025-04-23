"use client";
import Image from "next/image";
import logoutIcon from "/public/assets/images/dashboard/logout-icon.svg";
import {useRouter} from "next/navigation";
import {ADMIN_LOGIN} from "@/utils/pages-routes";

interface LogoutButtonProps {
    urlToLogin: string,
    isAdmin?: boolean
}

const LogoutButton: React.FC<LogoutButtonProps> = ({urlToLogin, isAdmin}) => {
    const router = useRouter();
    const logout = () => {
        if(isAdmin) {
            localStorage.removeItem('adminAuthToken');
            localStorage.removeItem('adminUserInfo');
            router.push(ADMIN_LOGIN);
        } else {
            localStorage.removeItem('userAuthToken');
            router.push(urlToLogin)
        }
    };

    return (
        <button 
            type="button" 
            className="w-[136px] h-[46px] gap-1 flex justify-center items-center bg-[#F3DCD6] rounded-[23px]
                font-gilroyMedium text-[16px]"
            onClick={logout}
        >
            <Image src={logoutIcon} alt="Logout" width={16} height={16} />
            <span>Logout</span>
        </button>
    )
}

export default LogoutButton