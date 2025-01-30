"use client";
import AdvertiserInfo from "./AdvertiserInfo";
import AdvertiserSubmittedProofs from "./AdvertiserSubmittedProofs";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import { getRequest } from "@/utils/utilFunctions";
import { ADVERTISER_GET } from "@/utils/api-urls";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useParams } from "next/navigation";


type OwnerProps = {
    id: number, 
    name: string, 
    email: string, 
    contactNumber: string, 
    officeNumber: string, 
    role: string
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

const AdvertiserProfileContent = () => {
  const {id} = useParams();

  const [data, setData] = useState<DataProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequest(ADVERTISER_GET+"/"+id, setData, setIsLoading);
  }, [id])

  return (
    <div className="content-wrapper">
        <div className="md:mb-0 mb-[40px]">
            <PageHeading heading="Advertiser Profile" mb="mb-0" />
            <PageSubHeading subheading="View submitted proofs and other business details" fontSize="md:text-[16px] text-[14px]" />
        </div>
        {isLoading ? <Loader /> :
        <div className="flex lg:flex-row flex-col gap-5">
            <>
              <AdvertiserInfo data={data} />
              <AdvertiserSubmittedProofs data={data} />
            </>
        </div>}
    </div>
  )
}

export default AdvertiserProfileContent