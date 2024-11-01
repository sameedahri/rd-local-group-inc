"use client";
import exclamationMarkIcon from "/public/assets/images/cardDetails/exclamation-mark-icon.svg";
import Image from "next/image";


const DisclaimerSection = () => {
  return (
    <section className="w-[90%] h-[188px] bg-[rgba(243,220,214,0.43)] rounded-[16px] border-2 border-inputOutline p-5">
        <div className="flex items-start gap-x-2">
            <Image className="mt-1" src={exclamationMarkIcon} alt="Exclamation" width={21} height={20} />
            <p className="text-[14px]">
                <span className="text-[#3C3C3C] font-gilroySemibold">Disclaimer:</span> 
                <span className="text-[#454545] font-gilroyMedium"> Please verify all ad copy for accuracy & indicate all corrections clearly.</span>
                <span className="text-[#636363] font-gilroyRegular"> This is a proof only. All colors here may or may not match final printed copy exactly. This is an opportunity to identify any errors made during the creation of your advertisement. Remember when proofing your ad to scan the QR code to ensure the link is correct. RD LOCAL GROUP shall not be held responsible for an error not marked. This is an opportunity to identify changes or to correct errors.</span>
                <span className="text-[#454545] font-gilroyMedium"> Should be the number of sets of changes requested exceed two (2), additional charges will apply.</span>
            </p>
        </div>
    </section>
  )
}

export default DisclaimerSection