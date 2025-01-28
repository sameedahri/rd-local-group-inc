"use client";
import {useParams} from "next/navigation";
import PageHeading from "../common/PageHeading";
import DisclaimerSection from "./DisclaimerSection";
import ProofSection from "./ProofSection";
import AddButton from "../common/AddButton";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import { getRequest } from "@/utils/utilFunctions";

type DataProps = {
  ad: string,
  businessAddress: string,
  businessContact: string,
  businessName: string,
  color: string,
  createdAt: string,
  customerId: string,
  dateOfSubmission: string,
  design: string,
  id: string,
  images: string[],
  proofQR: string,
  restaurant: string,
  revisions: string[],
  size: string,
  status: string,
  title: string,
  type: string
}
interface CardDetailsContentProps {
  urlToAddRevision: string,
  urlToDashboard: string,
  getProofDetailUrl: string
}
const CardDetailsContent:React.FC<CardDetailsContentProps> = ({urlToAddRevision, urlToDashboard, getProofDetailUrl}) => {
    const router = useRouter();
    const {id} = useParams();

    // const [data, setData] = useState<{data: DataProps, limit: number, page: number, total: number} | null>(null);
    const [data, setData] = useState<DataProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getRequest(getProofDetailUrl+"/"+id, setData, setIsLoading, false);
    }, [getProofDetailUrl])

    return (
      <div className="content-wrapper">
          <div className="flex justify-between items-center">
              <PageHeading heading="Proof Details" mb="mb-0" />
              <AddButton 
                  text="Dashboard" 
                  isSubmit={false} 
                  buttonWidth="w-[115px] md:w-[178px]" 
                  buttonHeight="h-[38px] md:h-[59px]" 
                  fontSize="md:text-[20px] text-[13px]"
                  onClickFunction={() => router.push(urlToDashboard)}
              />
          </div>
          <div className="flex flex-col items-center mt-8">
              <DisclaimerSection />
              <ProofSection 
                urlToAddRevision={urlToAddRevision} 
                urlToDashboard={urlToDashboard} 
                attachmentsData={data}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
          </div>
      </div>
    )
}

export default CardDetailsContent