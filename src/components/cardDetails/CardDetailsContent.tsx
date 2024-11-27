"use client";
// import {useParams} from "next/navigation";
import PageHeading from "../common/PageHeading";
import DisclaimerSection from "./DisclaimerSection";
import ProofSection from "./ProofSection";
import AddButton from "../common/AddButton";
import {useRouter} from "next/navigation";


interface CardDetailsContentProps {
  urlToAddRevision: string,
  urlToDashboard: string,
  getAttachmentsDataUrl: string
}

const CardDetailsContent:React.FC<CardDetailsContentProps> = ({urlToAddRevision, urlToDashboard, getAttachmentsDataUrl}) => {
    const router = useRouter();
    // const {id} = useParams();

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
              getAttachmentsDataUrl={getAttachmentsDataUrl}
            />
        </div>
    </div>
  )
}

export default CardDetailsContent