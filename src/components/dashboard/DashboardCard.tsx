"use client";
import Image from "next/image";
import calendarIcon from "/public/assets/images/dashboard/calender-icon.svg";
import AcceptedButton from "./AcceptedButton";
import ViewButton from "./ViewButton";
import {useRouter} from "next/navigation";


interface DashboardCardProps {
    urlToCardDetails: string,
    cardId: number,
    type: string,
    submissionDate: string,
    isAccepted: boolean
}

const DashboardCard: React.FC<DashboardCardProps> = ({urlToCardDetails, cardId, type, submissionDate, isAccepted}) => {
    const router = useRouter();

    const redirectToCardDetails = () => {
        router.push(urlToCardDetails + "/" + cardId);
    };

  return (
    <div className=" bg-white md:p-6 p-5 rounded-t-[2px] rounded-b-[10px] shadow-dashboardCard border-t-[6px] border-t-loginBg">
        <div className="flex justify-between items-center">
            <div>
                <p className="text-sec font-gilroyMedium text-[14px] uppercase">Type</p>
                <h2 className="text-black font-gilroySemibold text-[20px] capitalize">{type}</h2>
            </div>
            <div>
                <p className="text-black font-gilroySemibold text-[14px] capitalize">Submission Date:</p>
                <div className="flex gap-2">
                    <Image src={calendarIcon} alt="Calendar" width={18} height={18} />
                    <p className="text-sec font-gilroyMedium text-[14px] leading-6">{submissionDate}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between md:mt-10 mt-7">
            <AcceptedButton isAccepted={isAccepted} />
            <ViewButton onClickFunction={redirectToCardDetails} />
        </div>
    </div>
  )
}

export default DashboardCard