"use client";
import {useRouter} from "next/navigation";
import DashboardCard from "./DashboardCard";
import {useState, useLayoutEffect} from "react";
import PageHeading from "../common/PageHeading";
import {useFetch} from "@/utils/useFetch";
import AddButton from "../common/AddButton";


interface DashboardContentProps {
    urlToAddExtraStaff: string,
    urlToCardDetails: string,
    getProofsDataUrl: string
}
interface CardData {
    id: number,
    type: string,
    submissionDate: string,
    isAccepted: boolean
}

const DashboardContent: React.FC<DashboardContentProps> = ({urlToAddExtraStaff, urlToCardDetails, getProofsDataUrl}) => {
    const router = useRouter();

    const {data} = useFetch(getProofsDataUrl);
    console.log(data);

    // dummy data
    const [cardsArr, setCardsArr] = useState<CardData[] | null>(null);
    useLayoutEffect(() => {
        setCardsArr([
            {id: 1, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 2, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {id: 3, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 4, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 5, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 6, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {id: 7, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {id: 8, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 9, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 10, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {id: 11, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {id: 12, type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
        ]);
    }, [])

  return (
    <div className="content-wrapper">
        <div className="flex justify-between items-center">
            <PageHeading heading="Dashboard" mb="mb-0" />
            <AddButton 
                text="Add Extra Staff" 
                isSubmit={false} 
                buttonWidth="w-[115px] md:w-[178px]" 
                buttonHeight="h-[38px] md:h-[59px]" 
                fontSize="md:text-[20px] text-[13px]"
                onClickFunction={() => router.push(urlToAddExtraStaff)}
            />
        </div>
        <div className="grid sm:gap-6 gap-4 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mt-8">
            {cardsArr && cardsArr.map(({id, type, submissionDate, isAccepted}) => (
                <DashboardCard key={id} urlToCardDetails={urlToCardDetails} cardId={id} type={type} submissionDate={submissionDate} isAccepted={isAccepted} />
            ))}
        </div>
    </div>
  )
}

export default DashboardContent