"use client";
import ProofTitleCard from "./ProofTitleCard";
import ProofVerificationCard from "./ProofVerificationCard";
import AttachmentsCarousel from "./AttachmentsCarousel";


const ProofSection = () => {
    return (
        <section className="w-[100%] bg-white rounded-t-[2px] rounded-b-[10px] shadow-dashboardCard -mt-12 sm:p-[25px] sm:pr-[13px] p-[16px]">
            <AttachmentsCarousel />
            <div className="grid xl:grid-cols-2 gap-3 mt-4">
                <ProofTitleCard />
                <ProofVerificationCard />
            </div>
        </section>
    )
}

export default ProofSection