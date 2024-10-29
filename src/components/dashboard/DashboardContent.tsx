"use client";
import {useRouter} from "next/navigation";
import DashboardCard from "./DashboardCard";
import {useState, useLayoutEffect} from "react";
import PageHeading from "../common/PageHeading";


interface CardData {
    type: string,
    submissionDate: string,
    isAccepted: boolean
}

const DashboardContent = () => {
    const router = useRouter();
    const [cardsArr, setCardsArr] = useState<CardData[]>([]);

    useLayoutEffect(() => {
        setCardsArr([
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: false},
            {type: "Proof Title", submissionDate: "12 Dec, 12:00am", isAccepted: true},
        ]);
    }, [])

  return (
    <div>
        <div className="flex justify-between items-center">
            <PageHeading heading="Dashboard" mb="mb-0" />
            <button 
                type="button" 
                className="w-[115px] md:w-[178px] h-[38px] md:h-[59px] bg-[#3E3D3D] hover:bg-white rounded-[10px] border-2 border-[#3E3D3D]
                    text-darkBtn hover:text-black font-gilroySemibold text-[13px] md:text-[20px] transition"
                onClick={() => router.push("/addExtraStaff")}
            >Add Extra Staff
            </button>
        </div>
        <div className="grid sm:gap-6 gap-4 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mt-8">
            {Boolean(cardsArr.length > 0) && cardsArr.map(({type, submissionDate, isAccepted}, index) => (
                <DashboardCard key={index} type={type} submissionDate={submissionDate} isAccepted={isAccepted} />
            ))}
        </div>
    </div>
  )
}

export default DashboardContent