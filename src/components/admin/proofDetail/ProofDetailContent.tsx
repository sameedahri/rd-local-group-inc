"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import ProofInfo from "./ProofInfo";
import AcceptedButton from "@/components/dashboard/AcceptedButton";
import CancelButton from "@/components/common/CancelButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "/public/assets/images/common/logo.png";


const ProofDetailContent = () => {
    const router = useRouter();

    const images = [
        {url: logo},
        {url: logo},
        {url: logo},
        {url: logo},
        {url: logo}
    ];

  return (
    <div className="content-wrapper">
        <div className="md:mb-0 mb-[40px]">
            <PageHeading heading="Proof Detail" mb="mb-0" />
            <PageSubHeading subheading="View submitted proofs and other business details" fontSize="md:text-[16px] text-[14px]" />
        </div>
        {/* Card */}
        <div className="bg-white rounded-[16px] md:p-[45px] p-[20px] relative">
            <div className="md:absolute top-[45px] right-[45px] md:mb-0 mb-[18px]">
                <AcceptedButton isAccepted={false} buttonWidth="w-[100px]" buttonHeight="h-[32px]" borderRadius="md:rounded-[10px] rounded-[4px]" />
            </div>
            <ul className="flex flex-col gap-y-[18px]">
                <ProofInfo infoName="Proof Name:" infoValue="The Restaurant" />
                <ProofInfo infoName="Customer Id:" infoValue="ID12345" />
                <ProofInfo infoName="Business Name:" infoValue="The mighty restaurant" />
                <ProofInfo infoName="Owner Name:" infoValue="John Doe" />
                <ProofInfo infoName="Date Of Submission:" infoValue="09 06 2024" />
                <ProofInfo infoName="Proof Type:" infoValue="Asthetic" />
                <ProofInfo infoName="Proof Title:" infoValue="Table proof design" />
                <ProofInfo infoName="Shared with:" infoValue="John Doe, Micheal Lorm, George washington" />
            </ul>
            <div className="mb-[40px] mt-[18px]">
                <p className="md:text-[22px] text-[20px] text-[#262626] font-gilroySemibold">Proof Images:</p>
                <div className="flex flex-wrap gap-[10px] md:mt-[15px] mt-[5px]">
                    {images.map((img, index) => (
                        <div key={index} id={String(index)} className="relative">
                            <Image
                                src={img.url}
                                alt={`Uploaded ${index}`}
                                width={100}
                                height={100}
                                className="md:w-[100px] w-[58px] md:h-[100px] h-[58px] object-cover rounded-[10px] border border-[#F3EEED]"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <CancelButton text="Back" onClickFunction={() => router.push('/admin/restaurant-profile')} />
        </div>
    </div>
  )
}

export default ProofDetailContent