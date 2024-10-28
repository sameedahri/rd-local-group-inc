"use client";
import DashboardCard from "./DashboardCard";
import {useState, useLayoutEffect} from "react";


interface CardData {
    type: string,
    submissionDate: string,
    isAccepted: boolean
}

const DashboardContent = () => {
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
            <h1 className="text-heading font-gilroySemibold text-[24px] md:text-[28px]">Dashboard</h1>
            <button 
                type="button" 
                className="w-[115px] md:w-[178px] h-[38px] md:h-[59px] bg-[#3E3D3D] hover:bg-white rounded-[10px] border-2 border-[#3E3D3D]
                    text-darkBtn hover:text-black font-gilroySemibold text-[13px] md:text-[20px] transition"
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