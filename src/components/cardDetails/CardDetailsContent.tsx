"use client";
// import {useParams} from "next/navigation";
import PageHeading from "../common/PageHeading";
import DisclaimerSection from "./DisclaimerSection";
import ProofSection from "./ProofSection";


const CardDetailsContent = () => {
    // const {id} = useParams();

  return (
    <>
        <div>
            <PageHeading heading="Card Details" mb="mb-0" />
            <p className="text-[#3C3C3C] font-gilroyMedium text-[16px] md:mb-8 mb-6">View and select your option</p>
            <div className="flex flex-col items-center">
                <DisclaimerSection />
                <ProofSection />
            </div>
        </div>
    </>
  )
}

export default CardDetailsContent