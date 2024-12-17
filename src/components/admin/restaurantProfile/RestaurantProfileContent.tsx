"use client";
import RestaurantInfo from "./RestaurantInfo";
import SubmittedProofs from "./SubmittedProofs";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import {useParams} from "next/navigation";
import { getRequest } from "@/utils/utilFunctions";
import {OWNER_GET} from "@/utils/api-urls";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";


type OwnerProps = {
  id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
}
type DataProps = {
  id: number;
  restaurantName: string;
  agreementDate: string;
  address: string,
  contactNumber: string,
  tabletopSpecs: string,
  color: string,
  size: string
  proof: string,
  owners: OwnerProps[],
  // proofs: any[]
}

const RestaurantProfileContent = () => {
  const {id} = useParams();

  const [data, setData] = useState<DataProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      getRequest(OWNER_GET+"/"+id, setData, setIsLoading);
  }, [id])

  console.log(data)

  return (
    <div className="content-wrapper">
        <div className="md:mb-0 mb-[40px]">
            <PageHeading heading="Restaurant Profile" mb="mb-0" />
            <PageSubHeading subheading="View submitted proofs and other business details" fontSize="md:text-[16px] text-[14px]" />
        </div>
        {isLoading ? <Loader /> : 
          <div className="flex lg:flex-row flex-col gap-5">
              <RestaurantInfo data={data} />
              <SubmittedProofs />
          </div>}
    </div>
  )
}

export default RestaurantProfileContent