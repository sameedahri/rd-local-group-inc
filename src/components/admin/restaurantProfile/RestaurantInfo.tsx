"use client";
import InfoPiece from "./InfoPiece";
import emailIcon from "/public/assets/images/admin/restaurantProfile/email-icon.svg";
import downArrowIcon from "/public/assets/images/admin/restaurantProfile/down-arrow-icon.svg";
import Image from "next/image";
import User from "./User";
import { useState } from "react";
import { useFetch } from "@/utils/useFetch";


const RestaurantInfo = () => {
    const [isUsersOpen, setIsUsersOpen] = useState<boolean>(false);
    const toggleUsers = () => {
        setIsUsersOpen(!isUsersOpen);
    };
    const {data: users} = useFetch('/posts');
    console.log(users);

    const usersData = [
        {id: 1, name: "John Doe", email: "Jack@example.com"},
        {id: 2, name: "Aiden", email: "aiden@example.com"},
        {id: 3, name: "John Doe", email: "Jack@example.com"},
        {id: 4, name: "John Doe", email: "Jack@example.com"},
        {id: 5, name: "Aiden", email: "aiden@example.com"},
        {id: 6, name: "John Doe", email: "Jack@example.com"},
        {id: 7, name: "Aiden", email: "aiden@example.com"},
    ];

  return (
    <section className="lg:w-[38%] w-[100%] lg:min-w-[415px] bg-white rounded-[16px]">
        <div className="md:p-[30px] p-[20px]">
            <div className="flex items-center md:gap-x-5 gap-x-4 border-b border-b-[#E0E0E0] md:pb-[30px] pb-[20px]">
                <div className="md:w-[103px] w-[70px] md:h-[103px] h-[70px] rounded-full bg-[#D59483] flex justify-center items-center">
                    <p className="text-white font-gilroyBold md:text-[32px] text-[25px]">TMR</p>
                </div>
                <div>
                    <h2 className="text-[#403F3F] font-gilroySemibold md:text-[22px] text-[17px]">The Mighty Restaurant</h2>
                    <InfoPiece infoName="Owner:" infoValue="John Doe" />
                </div>
            </div>
            <div className="flex flex-col gap-y-[10px] pt-[30px]">
                <div className="flex gap-x-3">
                    <Image src={emailIcon} alt="Email" width={20} height={20} />
                    <InfoPiece infoName="Email:" infoValue="info@email.com" />
                </div>
                <div className="flex gap-x-3">
                    <Image className="invisible" src={emailIcon} alt="Email" width={20} height={20} />
                    <InfoPiece infoName="Phone Number:" infoValue="+1 1234 5678 90" />
                </div>
                <div className="flex gap-x-3">
                    <Image className="invisible" src={emailIcon} alt="Email" width={20} height={20} />
                    <InfoPiece infoName="Address:" infoValue=" Lorem street, Ipsum road, New york" />
                </div>
            </div>
        </div>
        <div className={`bg-[rgba(243,220,214,0.27)] rounded-[16px] m-[15px] py-[20px] md:px-[20px] px-[15px] md:h-auto ${isUsersOpen ? 'h-auto' : 'h-[70px]'}  overflow-hidden relative transition-all`}>
            <Image 
                onClick={toggleUsers} 
                className={`absolute right-[15px] md:hidden block ${isUsersOpen ? 'rotate-180' : 'rotate-0'} transition-all`} 
                src={downArrowIcon} 
                alt="Downwards Arrow" 
                width={30} 
                height={30} 
            />
            <h3 className="text-[#262626] font-gilroySemibold md:text-[22px] text-[20px] mb-[28px]">Associated Users</h3>
            <ul className="flex flex-col md:gap-y-[28px] gap-y-[20px]">
                {usersData && usersData.map((user) => (
                    <User initial={user.name[0]} userId={user.id} name={user.name} email={user.email} key={user.id} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default RestaurantInfo