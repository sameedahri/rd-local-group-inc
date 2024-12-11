"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import dynamic from "next/dynamic";
const AdminListTable = dynamic(() => import("./AdminListTable"), {ssr: false});
import useShowMenuIcon from "@/utils/useShowMenuIcon";
import { useRouter } from "next/navigation";
import {ADMIN_ADDUSER} from "@/utils/pages-routes";
import {getRequest} from "@/utils/utilFunctions";
import { ADMINS_GET } from "@/utils/api-urls";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";


interface DataProps {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    admin: string, 
    password: string
}

const AdminListContent = () => {
   const router = useRouter();
   useShowMenuIcon();

   const [data, setData] = useState<{data: DataProps[], limit: number, page: number, total: number} | null>(null);
   const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(ADMINS_GET, setData, setIsLoading);
    }, [])
   
    // const data = [
    //     {id: 1, name: 'John Doe Doe Doe Doe', email: 'JohnJohnJohn@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 2, name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 3,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 4,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 5,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 6,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 7,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 8,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 9,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 10,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 11,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 12,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 13,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 14,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 15,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 16,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 17,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 18,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 19,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 20,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 21,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 22,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    //     {id: 23,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
    //     {id: 24,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    // ];
    
    const columns = [
        {title: 'Id', data: 'id'},
        {title: 'Email', data: 'email'},
        {title: 'Mobile Number', data: 'phone'},
        {title: 'Role', data: 'role'},
        {title: 'Password', data: 'password'},
    ];

    return (
        <div className="content-wrapper">
            <div className="flex justify-between items-center">
                <div>
                    <PageHeading heading="Admins List" mb="mb-0" />
                    <PageSubHeading subheading="View, add, edit details" mb="mb-0" />
                </div>
                <AddButton 
                    text="Add" 
                    isSubmit={false} 
                    onClickFunction={() => router.push(ADMIN_ADDUSER)}
                />
            </div>
            <SearchBar />
            {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <AdminListTable data={data?.data} columns={columns} />}
        </div>
    )
}

export default AdminListContent