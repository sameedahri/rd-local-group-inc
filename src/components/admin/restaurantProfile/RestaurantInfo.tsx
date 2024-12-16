"use client";
import InfoPiece from "./InfoPiece";
import emailIcon from "/public/assets/images/admin/restaurantProfile/email-icon.svg";
import downArrowIcon from "/public/assets/images/admin/restaurantProfile/down-arrow-icon.svg";
import Image from "next/image";
import User from "./User";
import { useState } from "react";

type ProofsProps = {
    id: number,
    title: string,
    businessAddress: string,
    dateOfSubmission: string,
    status: string
}

type DataProps = {
    id: number,
    address: string,
    agreementDate: string,
    color: string,
    contactNumber: string,
    restaurantName: string,
    size: string,
    tabletopSpecs: string,
    owners: [],
    proofs: ProofsProps[]
}

interface RestaurantInfoProps {
    data: DataProps | null
}

const RestaurantInfo:React.FC<RestaurantInfoProps> = ({data}) => {
    const [isUsersOpen, setIsUsersOpen] = useState<boolean>(false);
    const toggleUsers = () => {
        setIsUsersOpen(!isUsersOpen);
    };

    // const usersData = [
    //     {id: 1, name: "John Doe", email: "Jack@example.com"},
    //     {id: 2, name: "Aiden", email: "aiden@example.com"},
    //     {id: 3, name: "John Doe", email: "Jack@example.com"},
    //     {id: 4, name: "John Doe", email: "Jack@example.com"},
    //     {id: 5, name: "Aiden", email: "aiden@example.com"},
    //     {id: 6, name: "John Doe", email: "Jack@example.com"},
    //     {id: 7, name: "Aiden", email: "aiden@example.com"},
    // ];

  return (
    <section className="lg:w-[38%] w-[100%] lg:min-w-[415px] bg-white rounded-[16px]">
        <div className="md:p-[30px] p-[20px]">
            <div className="flex items-center md:gap-x-5 gap-x-4 border-b border-b-[#E0E0E0] md:pb-[30px] pb-[20px]">
                <div className="md:w-[103px] w-[70px] md:h-[103px] h-[70px] rounded-full bg-[#D59483] flex justify-center items-center">
                    <p className="text-white font-gilroyBold md:text-[32px] text-[25px]">{data?.restaurantName.split(' ').map(val => val[0])}</p>
                </div>
                <div>
                    <h2 className="text-[#403F3F] font-gilroySemibold md:text-[22px] text-[17px]">{data?.restaurantName}</h2>
                    <InfoPiece infoName="Owner:" infoValue="John Doe" />
                </div>
            </div>
            <div className="flex flex-col gap-y-[10px] pt-[30px]">
                {/* <div className="flex gap-x-3">
                    <Image src={emailIcon} alt="Email" width={20} height={20} />
                    <InfoPiece infoName="Email:" infoValue="info@email.com" />
                </div> */}
                <div className="flex gap-x-3">
                    <Image className="invisible" src={emailIcon} alt="Email" width={20} height={20} />
                    <InfoPiece infoName="Phone Number:" infoValue={data?.contactNumber} />
                </div>
                <div className="flex gap-x-3">
                    <Image className="invisible" src={emailIcon} alt="Email" width={20} height={20} />
                    <InfoPiece infoName="Address:" infoValue={data?.address} />
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
                {/* eslint-disable-next-line */}
                {data && data.owners.map((user: any) => (
                    <User initial={user.name[0]} name={user.name} email={user.email} key={user.id} />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default RestaurantInfo