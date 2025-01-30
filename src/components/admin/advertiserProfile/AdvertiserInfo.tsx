"use client";
import InfoPiece from "../restaurantProfile/InfoPiece";
import emailIcon from "/public/assets/images/admin/restaurantProfile/email-icon.svg";
import downArrowIcon from "/public/assets/images/admin/restaurantProfile/down-arrow-icon.svg";
import Image from "next/image";
import User from "../restaurantProfile/User";
import { useState } from "react";


type OwnerProps = {
    id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
  }
  type ProofsProps = {
    id: number,
    title: string,
    businessAddress: string,
    dateOfSubmission: string,
    status: string
  }
  type ChecksProps = {
      checkNumber: string,
      eCheckAccountNumber: string,
      eCheckRouteNumber: string,
      id: number,
      nameOnCheck: string,
      phoneNumberOnCheck: string
  }
  type CreditCardsProps = {
      cardBillingStreet: string,
      cardCvc: string,
      cardExpDate: string,
      cardNumber: string,
      cardZipCode: string,
      id: number,
      nameOnCard: string,
  }
  type DataProps = {
      adAgreementDetails: string,
      adPrice: string,
      address: string,
      checks: ChecksProps[]
      city: string,
      companyName: string,
      contactNumber: string,
      creditCards: CreditCardsProps[]
      id: number,
      is2Payments: boolean,
      isOneTimePayment: boolean,
      owners: OwnerProps[],
      proofs: ProofsProps[],
      setupFee: string,
      state: string,
      totalDueAmount: string,
      zip: string
  }

interface RestaurantInfoProps {
    data: DataProps | null
}

const AdvertiserInfo:React.FC<RestaurantInfoProps> = ({data}) => {
    const [isUsersOpen, setIsUsersOpen] = useState<boolean>(false);
    const toggleUsers = () => {
        setIsUsersOpen(!isUsersOpen);
    };

  return (
    <section className="lg:w-[38%] w-[100%] lg:min-w-[415px] bg-white rounded-[16px]">
        <div className="md:p-[30px] p-[20px]">
            <div className="flex items-center md:gap-x-5 gap-x-4 border-b border-b-[#E0E0E0] md:pb-[30px] pb-[20px]">
                <div className="md:w-[103px] w-[70px] md:h-[103px] h-[70px] rounded-full bg-[#D59483] flex justify-center items-center">
                    <p className="text-white font-gilroyBold md:text-[32px] text-[25px]">{data?.companyName.split(' ').map(val => val[0])}</p>
                </div>
                <div>
                    <h2 className="text-[#403F3F] font-gilroySemibold md:text-[22px] text-[17px]">{data?.companyName}</h2>
                    {/* <InfoPiece infoName="Owner:" infoValue="John Doe" /> */}
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

export default AdvertiserInfo