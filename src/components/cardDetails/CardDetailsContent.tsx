"use client";
// import {useParams} from "next/navigation";
import PageHeading from "../common/PageHeading";
import DisclaimerSection from "./DisclaimerSection";
import ProofSection from "./ProofSection";
import PageSubHeading from "../common/PageSubHeading";


interface CardDetailsContentProps {
  urlToAddRevision: string,
  urlToDashboard: string
}

const CardDetailsContent:React.FC<CardDetailsContentProps> = ({urlToAddRevision, urlToDashboard}) => {
    // const {id} = useParams();

  return (
    <div className="content-wrapper">
        <PageHeading heading="Card Details" mb="mb-0" />
        <PageSubHeading subheading="View and select your option" />
        <div className="flex flex-col items-center">
            <DisclaimerSection />
            <ProofSection urlToAddRevision={urlToAddRevision} urlToDashboard={urlToDashboard} />
        </div>
    </div>
  )
}

export default CardDetailsContent