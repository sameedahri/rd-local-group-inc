"use client";
import rightArrow from "/public/assets/images/admin/user/right-arrow.svg";
import Image from "next/image";
import {useRouter, usePathname} from "next/navigation";
import {MouseEvent, useLayoutEffect, useState} from "react";


interface SidemenuItemProps {
    itemText: string,
    url: string,
    toggleSideMenu: () => void
}

const SidemenuItem:React.FC<SidemenuItemProps> = ({itemText, url, toggleSideMenu}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    // to make current page link active if page is reloaded
    const pathname = usePathname();
    useLayoutEffect(() => {
        if(pathname === url) setIsActive(true);
    }, [url, pathname])

    const router = useRouter();
    const redirectToUrl = () => {
        router.push(url);
    };
    const removeActive = () => {
        const divsWithBorder = document.querySelectorAll('#sidemenu li:not(:first-child) > div');
        divsWithBorder.forEach(item => {
            item.classList.remove('border-s-[#EBC0B4]');
        });
        const arrows = document.querySelectorAll('#sidemenu li:not(:first-child) img');
        arrows.forEach(item => {
            item.classList.add('hidden');
        })
    };
    const makeActive = (e: MouseEvent<HTMLLIElement>) => {
        removeActive();
        e.currentTarget.querySelector('div')?.classList.add('border-s-[#EBC0B4]');
        e.currentTarget.querySelector('img')?.classList.remove('hidden');
        toggleSideMenu();
        redirectToUrl();
    };

    return (
        <li onClick={makeActive} className={`relative select-none overflow-hidden`}>
            <div className={`border-s-[9px] hover:border-s-[#EBC0B4] ${isActive ? 'border-s-[#EBC0B4]' : ''} border-b border-b-[#D4D4D4] py-[21px] cursor-pointer`}>
                <div className="flex justify-between items-center ms-[21px]">
                    <span className="text-[#262626] font-gilroySemibold text-[20px]">{itemText}</span>
                    <Image 
                        src={rightArrow} 
                        alt="Right Arrow" 
                        width={13} 
                        height={10} 
                        className={`w-[13px] h-[13px] mr-[21px] transition-all duration-300 ${isActive ? '' : 'hidden'}`} />
                </div>
            </div>
        </li>
    )
}

export default SidemenuItem