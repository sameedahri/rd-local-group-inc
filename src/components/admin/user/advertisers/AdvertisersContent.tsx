"use client";
import PageHeading from "@/components/common/PageHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";
import AdvertisersReactTable from "./AdvertisersReactTable";
import { useRouter } from "next/navigation";
import {ADMIN_ADVERTISER} from "@/utils/pages-routes";
import { ADVERTISERS_GET } from "@/utils/api-urls";
import { getRequest } from "@/utils/utilFunctions";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";


const AdvertisersContent = () => {
    const router = useRouter();
    useShowMenuIcon();
    const [data, setData] = useState<{data: [], limit: number, page: number, total: number} | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(ADVERTISERS_GET, setData, setIsLoading);
    }, [])

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
            {isLoading ? <Loader dotsOnly={false} size="w-[10px] h-[10px]" /> : <AdvertisersReactTable data={data?.data} />}
        </div>
    )
}

export default AdvertisersContent