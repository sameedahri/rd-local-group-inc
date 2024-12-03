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


const AdminListContent = () => {
   const router = useRouter();
   useShowMenuIcon();
   
    const data = [
        {id: 1, name: 'John Doe Doe Doe Doe', email: 'JohnJohnJohn@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 2, name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 3,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 4,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 5,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 6,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 7,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 8,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 9,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 10,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 11,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 12,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 13,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 14,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 15,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 16,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 17,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 18,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 19,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 20,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 21,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 22,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
        {id: 23,  name: 'John Doe', email: 'John@gmail.com', mobileNumber: '+1 2222 3333 44' },
        {id: 24,  name: 'Jane Smith', email: 'Smith@hotmail.com', mobileNumber: '+2 2222 3333 44' },
    ];
    
    const columns = [
        { title: 'Id', data: 'id' },
        { title: 'Name', data: 'name' },
        { title: 'Email', data: 'email' },
        { title: 'Mobile Number', data: 'mobileNumber' },
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
            <AdminListTable data={data} columns={columns} />
        </div>
    )
}

export default AdminListContent