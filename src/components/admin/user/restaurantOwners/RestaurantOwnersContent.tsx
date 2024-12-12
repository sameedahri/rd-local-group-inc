"use client";
import PageHeading from "@/components/common/PageHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";
import dynamic from "next/dynamic";
const RestaurantOwnersTable = dynamic(() => import("./RestaurantOwnersTable"), {ssr: false});
// import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {ADMIN_ADDRESTAURANT} from "@/utils/pages-routes";
import {getRequest} from "@/utils/utilFunctions";
import {OWNERS_GET} from "@/utils/api-urls";
import Loader from "@/components/common/Loader";


const RestaurantOwnersContent = () => {
    const router = useRouter();
    useShowMenuIcon();
    const [data, setData] = useState<{data: [], limit: number, page: number, total: number} | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(OWNERS_GET, setData, setIsLoading);
    }, [])
    console.log(data)

    // const data = [
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

    type OwnerProps = {
        id: number, name: string, email: string, contactNumber: string, officeNumber: string, role: string
    }
    const columns = [
        {title: "Id", data: "id"},
        {title: "Restaurant Name", data: "restaurantName"},
        {title: "Agreement Date", data: "agreementDate", className: "agr-date", render: (data: string) => {
            return data.substring(0, data.indexOf('T'));
        }},
        {title: "Address", data: "address"},
        {title: "Contact Number", data: "contactNumber"},
        {title: "Tabletop Specs", data: "tabletopSpecs"},
        {title: "Color", data: "color"},
        {title: "size", data: "size"},
        // {title: "Proof", data: "proof"},
        {
            title: 'Owners',
            data: 'owners',
            render: (owners: OwnerProps[]) => {
                return owners
                    .map(
                        (owner: OwnerProps) =>
                            `<div class="nested-column-wrapper">
                                <div class="hidden">${owner.id}</div>
                                <p>
                                    <span>Name: </span>
                                    <span>${owner.name}</span>
                                </p>
                                <p>
                                    <span>Email: </span>
                                    <span>${owner.email}</span>
                                </p>
                                <p>
                                    <span>Contact Number: </span>
                                    <span>${owner.contactNumber}</span>
                                </p>
                                <p>
                                    <span>Office Number: </span>
                                    <span>${owner.officeNumber}</span>
                                </p>
                                <p>
                                    <span>Role: </span>
                                    <span>${owner.role}</span>
                                </p>
                            </div>`
                    )
                    .join('');
            },
        },
        // {
        //     title: 'Proofs',
        //     data: 'proofs',
        //     render: (proofs: any) => {
        //         return proofs
        //             .map(
        //                 (proof: any) =>
        //                     `<div class="owners-wrapper">
        //                         <div class="hidden">${proof.id}</div>
        //                         <p>
        //                             <span>Name: </span>
        //                             <span>${proof.businessName}</span>
        //                         </p>
        //                         <p>
        //                             <span>Email: </span>
        //                             <span>${proof.businessContact}</span>
        //                         </p>
        //                         <p>
        //                             <span>Contact Number: </span>
        //                             <span>${proof.businessAddress}</span>
        //                         </p>
        //                         <p>
        //                             <span>Office Number: </span>
        //                             <span>${proof.status}</span>
        //                         </p>
        //                     </div>`
        //             )
        //             .join('');
        //     },
        // },
    ];

    return (
        <div className="content-wrapper">
            <div className="flex justify-between items-center">
                <div>
                    <PageHeading heading="Restaurant Owners List" mb="mb-0" fontSize="md:text-[28px] text-[20px]" />
                </div>
                <AddButton 
                    text="Add Restaurant" 
                    isSubmit={false} 
                    buttonWidth="md:w-[178px] w-[115px]" 
                    buttonHeight="md:h-[59px] h-[38px]"
                    fontSize="md:text-[20px] text-[13px]"
                    onClickFunction={() => router.push(ADMIN_ADDRESTAURANT)}
                />
            </div>
            <SearchBar />
            {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <RestaurantOwnersTable data={data?.data} columns={columns} />}
        </div>
    )
}

export default RestaurantOwnersContent