"use client";
import Image from "next/image";
import logo from "/public/assets/images/common/logo.png";
import menuIcon from "/public/assets/images/common/menu-icon.svg";
import LogoutButton from "../dashboard/LogoutButton";
import useIsAuthenticated from "@/utils/useIsAuthenticated";
import { useEffect, useState } from "react";

interface HeaderProps {
    urlToLogin: string,
    isAdmin?: boolean
}

const Header: React.FC<HeaderProps> = ({urlToLogin, isAdmin=false}) => {
    useIsAuthenticated(true);

    const [userInitial, setUserInitial] = useState<string>("");
    useEffect(() => {
        const authToken = localStorage.getItem('adminUserInfo');
        if(authToken) setUserInitial(JSON.parse(authToken).email[0].toUpperCase());
    }, [])

    const toggleSideMenu = () => {
        document.querySelector('#sidemenu')?.classList.toggle('translate-x-[-100vw]');
    };

    return (
        <header className="fixed top-0 z-50 w-[100%] h-[95px] bg-white flex justify-between items-center 2xl:px-32 lg:px-24 md:px-8 px-4">
            <div className="flex items-center gap-x-3">
                <Image id="menuIcon" className="hidden" onClick={toggleSideMenu} src={menuIcon} alt="Side Menu" width={23} height={23} />
                <Image src={logo} alt="Logo" width={55} height={52} />
            </div>
           <div className="flex justify-center gap-3">
                <LogoutButton urlToLogin={urlToLogin} isAdmin={isAdmin} />
                <button 
                    type="button"
                    className="w-[46px] h-[46px] bg-[#AB877E] rounded-full text-darkBtn font-gilroySemibold text-[20px]"
                >{userInitial}</button>
           </div>
        </header>
    )
}

export default Header