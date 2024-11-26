"use client";
import RestaurantInfo from "./RestaurantInfo";
import SubmittedProofs from "./SubmittedProofs";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";


const RestaurantProfileContent = () => {
  return (
    <div className="content-wrapper">
        <div className="md:mb-0 mb-[40px]">
            <PageHeading heading="Restaurant Profile" mb="mb-0" />
            <PageSubHeading subheading="View submitted proofs and other business details" fontSize="md:text-[16px] text-[14px]" />
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
            <RestaurantInfo />
            <SubmittedProofs />
        </div>
    </div>
  )
}

export default RestaurantProfileContent