"use client";
import {useRouter} from "next/navigation";
import DashboardCard from "./DashboardCard";
import {useState, useLayoutEffect} from "react";
import PageHeading from "../common/PageHeading";
import {useFetch} from "@/utils/useFetch";


interface CardData {
    id: number,
    type: string,
    submissionDate: string,
    isAccepted: boolean
}

const DashboardContent = () => {
    const router = useRouter();

    const {data} = useFetch("/posts");
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
    <>
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
            {cardsArr && cardsArr.map(({id, type, submissionDate, isAccepted}) => (
                <DashboardCard key={id} cardId={id} type={type} submissionDate={submissionDate} isAccepted={isAccepted} />
            ))}
        </div>
    </>
  )
}

export default DashboardContent