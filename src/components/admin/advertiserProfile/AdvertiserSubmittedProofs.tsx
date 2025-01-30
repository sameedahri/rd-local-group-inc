"use client";
import PageHeading from "@/components/common/PageHeading";
import ProofCard from "../restaurantProfile/ProofCard";


type OwnerProps = {
    id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
  }
  type ProofsProps = {
    id: number,
    title: string,
    businessAddress: string,
    dateOfSubmission: string,
    status: string
  }
  type ChecksProps = {
      checkNumber: string,
      eCheckAccountNumber: string,
      eCheckRouteNumber: string,
      id: number,
      nameOnCheck: string,
      phoneNumberOnCheck: string
  }
  type CreditCardsProps = {
      cardBillingStreet: string,
      cardCvc: string,
      cardExpDate: string,
      cardNumber: string,
      cardZipCode: string,
      id: number,
      nameOnCard: string,
  }
  type DataProps = {
      adAgreementDetails: string,
      adPrice: string,
      address: string,
      checks: ChecksProps[]
      city: string,
      companyName: string,
      contactNumber: string,
      creditCards: CreditCardsProps[]
      id: number,
      is2Payments: boolean,
      isOneTimePayment: boolean,
      owners: OwnerProps[],
      proofs: ProofsProps[],
      setupFee: string,
      state: string,
      totalDueAmount: string,
      zip: string
  }

interface AdvertiserSubmittedProofsProps {
    data: DataProps | null
}

const AdvertiserSubmittedProofs:React.FC<AdvertiserSubmittedProofsProps> = ({data}) => {

  return (
    <section className="lg:w-[62%] w-[100%] bg-white rounded-[16px] md:p-[30px] p-[20px]">
        <PageHeading heading="Submitted Proofs" h2={true} mb="md:mb-8 mb-4" />
        <div className="grid xl:gap-5 gap-3 xl:grid-cols-2 grid-cols-1 md:mt-8 mt-4">
            {data?.proofs?.map((proof) => (
                <ProofCard 
                    urlToProofDetails={`/admin/proof-detail/${proof.id}`}
                    title={proof.title}
                    description={proof.businessAddress}
                    submissionDate={proof.dateOfSubmission}
                    isAccepted={proof.status === "Approved" ? true : false}
                    key={proof.id}
                />
            ))}
        </div>
    </section>
  )
}

export default AdvertiserSubmittedProofs