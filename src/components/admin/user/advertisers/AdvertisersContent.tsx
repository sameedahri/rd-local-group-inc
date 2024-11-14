"use client";
import PageHeading from "@/components/common/PageHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";


const AdvertisersContent = () => {
    useShowMenuIcon();

    return (
        <div className="content-wrapper">
            <div className="flex justify-between items-center">
                <div>
                    <PageHeading heading="Advertisers List" mb="mb-0" />
                </div>
                <AddButton 
                    text="Add Advertiser" 
                    isSubmit={false} 
                    buttonWidth="md:w-[178px] w-[140px]" 
                    onClickFunction={() => {}}
                />
            </div>
            <SearchBar />
        </div>
    )
}

export default AdvertisersContent