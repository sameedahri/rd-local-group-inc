"use client";
import Image from "next/image";
import logoutIcon from "/public/assets/images/dashboard/logout-icon.svg";
import {useRouter} from "next/navigation";


const LogoutButton = () => {
    const router = useRouter();

    return (
        <button 
            type="button" 
            className="w-[136px] h-[46px] gap-1 flex justify-center items-center bg-[#F3DCD6] rounded-[23px]"
            onClick={() => router.push('/login')}
        >
            <Image src={logoutIcon} alt="Logout" width={16} height={16} />
            <span className="flex justify-center items-center  font-gilroyMedium text-[16px]">Logout</span>
        </button>
    )
}

export default LogoutButton