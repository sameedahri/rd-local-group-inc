"use client";
import Image from "next/image";
import calendarIcon from "/public/assets/images/dashboard/calender-icon.svg";
import AcceptedButton from "@/components/dashboard/AcceptedButton";
// import ViewButton from "@/components/dashboard/ViewButton";
import AddButton from "@/components/common/AddButton";
import {useRouter} from "next/navigation";


interface ProofCardProps {
    urlToProofDetails: string,
    cardId: number,
    title: string,
    description: string,
    submissionDate: string,
    isAccepted: boolean
}

const ProofCard:React.FC<ProofCardProps> = ({urlToProofDetails, cardId, title, description, submissionDate, isAccepted}) => {
    const router = useRouter();

    const redirectToProofDetails = () => {
        router.push(urlToProofDetails + "/" + cardId);
    };

  return (
    <div className="bg-[#F3EEED] md:p-4 p-3 rounded-[9px] shadow-dashboardCard border-s-[6px] border-s-loginBg">
        <div>
            <h2 className="text-[#262626] font-gilroySemibold text-[16px] capitalize">{title}</h2>
            <p className="text-[#636363] font-gilroyMedium text-[14px] line-clamp-1">{description}</p>
        </div>
        <div className="flex gap-2 mt-4">
            <Image src={calendarIcon} alt="Calendar" width={18} height={18} />
            <p className="text-[#515050] font-gilroySemibold text-[14px]">{submissionDate}</p>
        </div>
        <div className="flex justify-between items-center mt-7">
            <AddButton 
                text="View Proof" 
                isSubmit={false}
                buttonWidth="md:w-[142px] w-[130px]"
                buttonHeight="h-[47px]"
                fontSize="text-[16px]"
                onClickFunction={redirectToProofDetails} 
            />
            <AcceptedButton isAccepted={isAccepted} buttonWidth="w-[100px]" buttonHeight="h-[32px]" />
        </div>
    </div>
  )
}

export default ProofCard