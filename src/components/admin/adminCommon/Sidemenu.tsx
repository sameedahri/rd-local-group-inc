"use client";
import SidemenuItem from "../user/SidemenuItem";
import Image from "next/image";
import closeIcon from "/public/assets/images/common/close-icon.svg";


const Sidemenu = () => {
    const toggleSideMenu = () => {
        document.querySelector('#sidemenu')?.classList.toggle('translate-x-[-100vw]');
    };

    return (
        <aside id="sidemenu" className="fixed top-[95px] lg:left-0 lg:translate-x-0 translate-x-[-100vw] z-40 w-[310px] h-[calc(100vh-95px)] overflow-y-auto pb-[30px] bg-[#F3EEED] custom-scrollbar transition-all">
            <ul>
                <li className="lg:hidden flex justify-end border-b border-b-[#D4D4D4] py-[21px] pe-[21px]">
                    <Image onClick={toggleSideMenu} src={closeIcon} alt="Close Side Menu" width={23} height={23} />
                </li>
                <SidemenuItem itemText="Admins List" url="/admin/user/admin-list" toggleSideMenu={toggleSideMenu} />
                <SidemenuItem itemText="Restaurants Owners" url="/admin/user/restaurant-owners" toggleSideMenu={toggleSideMenu} />
                <SidemenuItem itemText="Advertisers" url="/admin/user/advertisers" toggleSideMenu={toggleSideMenu} />
            </ul>
        </aside>
    )
}

export default Sidemenu