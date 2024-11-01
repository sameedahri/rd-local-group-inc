"use client";
import ProofAttachemnt from "./ProofAttachemnt";
import ProofTitleCard from "./ProofTitleCard";
import ProofVerificationCard from "./ProofVerificationCard";


const ProofSection = () => {
    return (
        <section className="w-[100%] bg-white rounded-t-[2px] rounded-b-[10px] shadow-dashboardCard -mt-12 p-6">
            <div className="grid grid-cols-5 gap-x-3">
                <ProofAttachemnt />
                <ProofAttachemnt />
                <ProofAttachemnt />
                <ProofAttachemnt />
                <ProofAttachemnt />
            </div>
            <div className="grid grid-cols-2 gap-x-3 mt-3">
                <ProofTitleCard />
                <ProofVerificationCard />
            </div>
        </section>
    )
}

export default ProofSection