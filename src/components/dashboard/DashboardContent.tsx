"use client";
import {useRouter} from "next/navigation";
import DashboardCard from "./DashboardCard";
import {useState, useEffect} from "react";
import PageHeading from "../common/PageHeading";
import AddButton from "../common/AddButton";
import { getRequest } from "@/utils/utilFunctions";
import Loader from "../common/Loader";

interface DashboardContentProps {
    urlToAddExtraStaff: string,
    urlToCardDetails: string,
    getProofsDataUrl: string
}
interface DataProps {
    id: number,
    type: string,
    dateOfSubmission: string,
    status: string
}

const DashboardContent: React.FC<DashboardContentProps> = ({urlToAddExtraStaff, urlToCardDetails, getProofsDataUrl}) => {
    const router = useRouter();
    const [data, setData] = useState<{data: DataProps[], limit: number, page: number, total: number} | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(getProofsDataUrl, setData, setIsLoading, false);
    }, [getProofsDataUrl])

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
        {isLoading ? <Loader mt="mt-8" /> : 
        <div className="grid sm:gap-6 gap-4 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mt-8">
            {data && data.data.map(({id, type, dateOfSubmission, status}) => (
                <DashboardCard key={id} urlToCardDetails={urlToCardDetails} cardId={id} type={type} submissionDate={dateOfSubmission} status={status} />
            ))}
        </div>}
    </div>
  )
}

export default DashboardContent