"use client";
import PageHeading from "@/components/common/PageHeading";
import ProofCard from "./ProofCard";
// import { useFetch } from "@/utils/useFetch";
import { getRequest } from "@/utils/utilFunctions";
import { PROOFS_GET } from "@/utils/api-urls";
import { useState, useEffect } from "react";


type DataProps = {
    id: number,
    businessAddress: string,
    businessContact: string,
    businessName: string,
    color: string,
    createdAt: string,
    customerId: string,
    dateOfSubmission: string,
    design: string,
    images: string[],
    proofQR: string,
    size: string,
    status: string,
    title: string,
    type: string
}

const SubmittedProofs = () => {
    // const {data: restaurants} = useFetch('/posts');
    // console.log(restaurants);

    const [data, setData] = useState<DataProps[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      getRequest(PROOFS_GET, setData, setIsLoading);
    }, [])
  
    // console.log(data)

    // const restaurantsData = [
    //     {id: 1, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 2, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: false},
    //     {id: 3, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 4, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 5, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 6, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: false},
    //     {id: 7, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: false},
    //     {id: 8, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 9, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 10, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    //     {id: 11, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: false},
    //     {id: 12, title: "Proof Title", description: "Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.", submissionDate: "12 Dec, 12:00am", isAccepted: true},
    // ];

  return (
    <section className="lg:w-[62%] w-[100%] bg-white rounded-[16px] md:p-[30px] p-[20px]">
        <PageHeading heading="Submitted Proofs" h2={true} mb="md:mb-8 mb-4" />
        <div className="grid xl:gap-5 gap-3 xl:grid-cols-2 grid-cols-1 md:mt-8 mt-4">
            {/* {restaurantsData && restaurantsData.map((restaurant) => (
                <ProofCard 
                    urlToProofDetails={`/admin/proof-detail/${restaurant.id}`}
                    title={restaurant.title}
                    description={restaurant.description}
                    submissionDate={restaurant.submissionDate}
                    isAccepted={restaurant.isAccepted}
                    key={restaurant.id}
                />
            ))} */}
            {isLoading ? <></> : data?.map((proof) => (
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

export default SubmittedProofs