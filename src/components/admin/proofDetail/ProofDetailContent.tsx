"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import ProofInfo from "./ProofInfo";
import AcceptedButton from "@/components/dashboard/AcceptedButton";
import CancelButton from "@/components/common/CancelButton";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { getRequest } from "@/utils/utilFunctions";
import { PROOF_GET } from "@/utils/api-urls";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { useParams } from "next/navigation";
// import ProofDetailDialogue from "./ProofDetailDialogue";
// import { RefObject } from "react";
import RadixUIDialog from "./RadixUIDialogue";


type DataProps = {
    id: number,
    businessAddress: string,
    businessContact: string,
    businessName: string,
    color: string,
    createdAt: string,
    customerId: string,
    dateOfSubmission: string,
    design: string,
    images: string[],
    proofQR: string,
    size: string,
    status: string,
    title: string,
    type: string
}

const ProofDetailContent = () => {
    const router = useRouter();
    const {id} = useParams();

    const [data, setData] = useState<DataProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(PROOF_GET+"/"+id, setData, setIsLoading);
    }, [id])

    // let proofDetailDialogueRef: HTMLDialogElement | null;
    // const setProofDetailDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
    //     proofDetailDialogueRef = ref.current;
    // };
    // const showProofDetailModal = () => {
    //     proofDetailDialogueRef?.show()
    // };
    // const closeProofDetailModal = () => {
    //     proofDetailDialogueRef?.close()
    // };

    return (
        <>
        <div className="content-wrapper">
            <div className="md:mb-0 mb-[40px]">
                <PageHeading heading="Proof Detail" mb="mb-0" />
                <PageSubHeading subheading="View submitted proofs and other business details" fontSize="md:text-[16px] text-[14px]" />
            </div>
            {/* Card */}
            <div className="bg-white rounded-[16px] md:p-[45px] p-[20px] relative">
                {isLoading ? <Loader /> :
                    <>
                    <div className="md:absolute top-[45px] right-[45px] md:mb-0 mb-[18px]">
                        <AcceptedButton isAccepted={data?.status === "Approved" ? true : false} buttonWidth="w-[100px]" buttonHeight="h-[32px]" borderRadius="md:rounded-[10px] rounded-[4px]" />
                    </div>
                    <ul className="flex flex-col gap-y-[18px]">
                        <ProofInfo infoName="Customer Id:" infoValue={data?.customerId} />
                        <ProofInfo infoName="Business Name:" infoValue={data?.businessName} />
                        <ProofInfo infoName="Business Contact:" infoValue={data?.businessContact} />
                        <ProofInfo infoName="Business Address:" infoValue={data?.businessAddress} />
                        <ProofInfo infoName="Proof Title:" infoValue={data?.title} />
                        <ProofInfo infoName="Proof Type:" infoValue={data?.type} />
                        <ProofInfo infoName="Proof Color:" infoValue={data?.color} />
                        <ProofInfo infoName="Proof Size:" infoValue={data?.size} />
                        <ProofInfo infoName="Proof Design:" infoValue={data?.design} />
                        <ProofInfo infoName="ProofQR:" infoValue={data?.proofQR} />
                        <ProofInfo infoName="Date Of Submission:" infoValue={data?.dateOfSubmission} />
                    </ul>
                    <div className="mb-[40px] mt-[18px]">
                        <p className="md:text-[22px] text-[20px] text-[#262626] font-gilroySemibold">Proof Images:</p>
                        <div className="flex flex-wrap gap-[10px] md:mt-[15px] mt-[5px]">
                            {data?.images.map((imgUrl, index) => (
                                <div key={index} id={String(index)} className="relative">
                                    {/* <Image
                                        src={imgUrl}
                                        alt={`Uploaded ${index}`}
                                        width={100}
                                        height={100}
                                        className="md:w-[100px] w-[58px] md:h-[100px] h-[58px] object-cover rounded-[10px] border border-[#F3EEED]"
                                    /> */}
                                    {/* <ProofDetailDialogue setDialogueRef={setProofDetailDialogueRef} closeDialogue={closeProofDetailModal} imgUrl={imgUrl} /> */}
                                    <RadixUIDialog imgUrl={imgUrl} />
                                </div>
                            ))}
                        </div>
                    </div>
                    </>
                }
                <CancelButton text="Back" onClickFunction={() => router.back()} />
            </div>
        </div>
        </>
    )
}

export default ProofDetailContent