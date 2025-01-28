"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";
import { useRouter } from "next/navigation";
import {ADMIN_ADDUSER} from "@/utils/pages-routes";
import {getRequest} from "@/utils/utilFunctions";
import { ADMINS_GET } from "@/utils/api-urls";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import AdminListReactTable from "./AdminListReactTable";

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
            {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <AdminListReactTable data={data?.data} />}
        </div>
    )
}

export default AdminListContent