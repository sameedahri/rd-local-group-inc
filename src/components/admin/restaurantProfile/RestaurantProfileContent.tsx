"use client";
import RestaurantInfo from "./RestaurantInfo";
import SubmittedProofs from "./SubmittedProofs";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import { getRequest } from "@/utils/utilFunctions";
import { OWNER_GET } from "@/utils/api-urls";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import { useParams } from "next/navigation";


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
type DataProps = {
  id: number,
  address: string,
  agreementDate: string,
  color: string,
  contactNumber: string,
  restaurantName: string,
  size: string,
  tabletopSpecs: string,
  owners: OwnerProps[],
  proofs: ProofsProps[]
}

const RestaurantProfileContent = () => {
  const {id} = useParams();

  const [data, setData] = useState<DataProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequest(OWNER_GET+"/"+id, setData, setIsLoading);
  }, [id])

  return (
    <div className="content-wrapper">
        <div className="md:mb-0 mb-[40px]">
            <PageHeading heading="Restaurant Profile" mb="mb-0" />
            <PageSubHeading subheading="View submitted proofs and other business details" fontSize="md:text-[16px] text-[14px]" />
        </div>
        {isLoading ? <Loader /> :
        <div className="flex lg:flex-row flex-col gap-5">
            <>
              <RestaurantInfo data={data} />
              <SubmittedProofs data={data} />
            </>
        </div>}
    </div>
  )
}

export default RestaurantProfileContent