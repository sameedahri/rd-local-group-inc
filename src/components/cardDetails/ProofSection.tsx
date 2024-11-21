"use client";
import ProofTitleCard from "./ProofTitleCard";
import ProofVerificationCard from "./ProofVerificationCard";
import AttachmentsCarousel from "./AttachmentsCarousel";


interface ProofSectionProps {
    urlToAddRevision: string,
    urlToDashboard: string
}

const ProofSection:React.FC<ProofSectionProps> = ({urlToAddRevision, urlToDashboard}) => {
    return (
        <section className="w-[100%] bg-white rounded-t-[2px] rounded-b-[10px] shadow-dashboardCard -mt-12 sm:p-[25px] sm:pr-[13px] p-[16px]">
            <AttachmentsCarousel />
            <div className="grid xl:grid-cols-2 gap-3 mt-4">
                <ProofTitleCard />
                <ProofVerificationCard urlToAddRevision={urlToAddRevision} urlToDashboard={urlToDashboard} />
            </div>
        </section>
    )
}

export default ProofSection