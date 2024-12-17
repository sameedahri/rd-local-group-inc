"use client";
import PageHeading from "@/components/common/PageHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";
// import dynamic from "next/dynamic";
// const AdvertisersTable = dynamic(() => import("../advertisers/AdvertisersTable"), {ssr: false});
import AdvertisersReactTable from "./AdvertisersReactTable";
import { useRouter } from "next/navigation";
import {ADMIN_ADVERTISER} from "@/utils/pages-routes";
import { ADVERTISERS_GET } from "@/utils/api-urls";
import { getRequest } from "@/utils/utilFunctions";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
// import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";


const AdvertisersContent = () => {
    const router = useRouter();
    useShowMenuIcon();
    const [data, setData] = useState<{data: [], limit: number, page: number, total: number} | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(ADVERTISERS_GET, setData, setIsLoading);
    }, [])
    console.log(data)

    // const dummyData = [
    //     {id: 1, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 2, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 3, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 4, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 5, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 6, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 7, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 8, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 9, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 10, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 11, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 12, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 13, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 14, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 15, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 16, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 17, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 18, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 19, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 20, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 21, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    // ];

    // const columns = [
    //     {title: "Id", data: "id"},
    //     {title: "Business Name", data: "businessName"},
    //     {title: "Owner Name", data: "ownerName"},
    //     {title: "Email", data: "email"},
    //     {title: "Mobile Number", data: "mobileNumber"},
    //     {title: "Address", data: "address"},
    //     {title: "Proof", data: "proof"},
    //     {title: "View", data: "view", render: (data: string) => `<Image src="${data}" alt="View" width={24} height={24}" style="cursor:pointer; display:block; margin-left:7px;" />`,}
    // ];

    // type OwnerProps = {
    //     id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
    // };
    // type CheckProps = {
    //     id: number, checkNumber: string, eCheckAccountNumber: string, eCheckRouteNumber: string, nameOnCheck: string, phoneNumberOnCheck: string
    // };
    // type CreditCardProps = {
    //     id: number, cardBillingStreet: string, cardCvc: string, cardExpDate: string, cardNumber: string, cardZipCode: string, nameOnCard: string
    // };
    // const columns = [
    //     {title: "Id", data: "id"},
    //     {title: "Company Name", data: "companyName"},
    //     {title: "Address", data: "address"},
    //     {title: "City", data: "city"},
    //     {title: "State", data: "state"},
    //     {title: "Zip", data: "zip"},
    //     {title: "Ad Agreement Details", data: "adAgreementDetails"},
    //     {title: "Ad Price", data: "adPrice"},
    //     {title: "One Time Payment", data: "isOneTimePayment", render: (data: boolean) => {
    //         return data ? "Yes" : "No";
    //     }},
    //     {title: "Two Payments", data: "is2Payments", render: (data: boolean) => {
    //         return data ? "Yes" : "No";
    //     }},
    //     {title: "Setup Fee", data: "setupFee"},
    //     {title: "Total Due Amount", data: "totalDueAmount"},
    //     {
    //         title: 'Owners',
    //         data: 'owners',
    //         render: (owners: OwnerProps[]) => {
    //             return owners
    //                 .map(
    //                     (owner: OwnerProps) =>
    //                         `<div class="nested-column-wrapper">
    //                             <div class="hidden">${owner.id}</div>
    //                             <p>
    //                                 <span>Name: </span>
    //                                 <span>${owner.name}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Email: </span>
    //                                 <span>${owner.email}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Contact Number: </span>
    //                                 <span>${owner.contactNumber}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Office Number: </span>
    //                                 <span>${owner.officeNumber}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Role: </span>
    //                                 <span>${owner.role}</span>
    //                             </p>
    //                         </div>`
    //                 )
    //                 .join('');
    //         },
    //     },
    //     {
    //         title: 'Checks',
    //         data: 'checks',
    //         render: (checks: CheckProps[]) => {
    //             return checks
    //                 .map(
    //                     (check: CheckProps) =>
    //                         `<div class="nested-column-wrapper">
    //                             <div class="hidden">${check.id}</div>
    //                             <p>
    //                                 <span>Name On Check: </span>
    //                                 <span>${check.nameOnCheck}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Check Number: </span>
    //                                 <span>${check.checkNumber}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Phone Number: </span>
    //                                 <span>${check.phoneNumberOnCheck}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Route Number: </span>
    //                                 <span>${check.eCheckRouteNumber}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Acct Number: </span>
    //                                 <span>${check.eCheckAccountNumber}</span>
    //                             </p>
    //                         </div>`
    //                 )
    //                 .join('');
    //         },
    //     },
    //     {
    //         title: 'Credit Cards',
    //         data: 'creditCards',
    //         render: (creditCards: CreditCardProps[]) => {
    //             return creditCards
    //                 .map(
    //                     (creditCard: CreditCardProps) =>
    //                         `<div class="nested-column-wrapper">
    //                             <div class="hidden">${creditCard.id}</div>
    //                             <p>
    //                                 <span>Card Number: </span>
    //                                 <span>${creditCard.cardNumber}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Name On Card: </span>
    //                                 <span>${creditCard.nameOnCard}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Street: </span>
    //                                 <span>${creditCard.cardBillingStreet}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Zip Code: </span>
    //                                 <span>${creditCard.cardZipCode}</span>
    //                             </p>
    //                             <p>
    //                                 <span>Exp Date: </span>
    //                                 <span>${creditCard.cardExpDate}</span>
    //                             </p>
    //                             <p>
    //                                 <span>CVC: </span>
    //                                 <span>${creditCard.cardCvc}</span>
    //                             </p>
    //                         </div>`
    //                 )
    //                 .join('');
    //         },
    //     },
    // ];

    return (
        <div className="sidemenu-page-content-wrapper">
            <div className="flex justify-between items-center">
                <div>
                    <PageHeading heading="Advertisers List" mb="mb-0" fontSize="md:text-[28px] text-[20px]" />
                </div>
                <AddButton 
                    text="Add Advertiser" 
                    isSubmit={false} 
                    buttonWidth="md:w-[178px] w-[140px]" 
                    buttonHeight="md:h-[59px] h-[38px]"
                    fontSize="md:text-[20px] text-[13px]"
                    onClickFunction={() => router.push(ADMIN_ADVERTISER)}
                />
            </div>
            <SearchBar />
            {/* {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <AdvertisersTable data={data?.data} columns={columns} />} */}
            {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <AdvertisersReactTable data={data?.data} />}
        </div>
    )
}

export default AdvertisersContent