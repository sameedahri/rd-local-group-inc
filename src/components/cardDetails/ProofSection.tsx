"use client";
import ProofTitleCard from "./ProofTitleCard";
import ProofVerificationCard from "./ProofVerificationCard";
import AttachmentsCarousel from "./AttachmentsCarousel";
import { Dispatch, SetStateAction } from "react";

type DataProps = {
    ad: string,
    businessAddress: string,
    businessContact: string,
    businessName: string,
    color: string,
    createdAt: string,
    customerId: string,
    dateOfSubmission: string,
    design: string,
    id: string,
    images: string[],
    proofQR: string,
    restaurant: string,
    revisions: string[],
    size: string,
    status: string,
    title: string,
    type: string
}
interface ProofSectionProps {
    urlToAddRevision: string,
    urlToDashboard: string,
    attachmentsData: DataProps | null,
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}
const ProofSection:React.FC<ProofSectionProps> = ({urlToAddRevision, urlToDashboard, attachmentsData, isLoading}) => {
    return (
        <section className="w-[100%] bg-white rounded-t-[2px] rounded-b-[10px] shadow-dashboardCard -mt-12 sm:p-[25px] sm:pr-[13px] p-[16px]">
            <AttachmentsCarousel 
                attachmentsData={attachmentsData?.images} 
                isLoading={isLoading} 
            />
            <div className="grid xl:grid-cols-2 gap-3 mt-4">
                <ProofTitleCard attachmentsData={attachmentsData} />
                <ProofVerificationCard 
                    urlToAddRevision={urlToAddRevision} 
                    urlToDashboard={urlToDashboard} 
                    attachmentsData={attachmentsData} 
                />
            </div>
        </section>
    )
}

export default ProofSection