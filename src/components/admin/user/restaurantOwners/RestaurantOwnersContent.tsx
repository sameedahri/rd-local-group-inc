"use client";
import PageHeading from "@/components/common/PageHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {ADMIN_ADDRESTAURANT} from "@/utils/pages-routes";
import {getRequest} from "@/utils/utilFunctions";
import {OWNERS_GET} from "@/utils/api-urls";
import Loader from "@/components/common/Loader";
import RestaurantOwnersReactTable from "./RestaurantOwnersReactTable";


const RestaurantOwnersContent = () => {
    const router = useRouter();
    useShowMenuIcon();
    const [data, setData] = useState<{data: [], limit: number, page: number, total: number} | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(OWNERS_GET, setData, setIsLoading);
    }, [])

    // Search functionality
    const [filterText, setFilterText] = useState("");
    const filteredItems = data?.data.filter(item => {
        return Object.values(item).join(" ").toLowerCase().search(filterText.toLowerCase()) > -1;
    });

    return (
        <div className="sidemenu-page-content-wrapper">
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
            <SearchBar setFilterText={setFilterText} />
            {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <RestaurantOwnersReactTable data={filteredItems} />}
        </div>
    )
}

export default RestaurantOwnersContent