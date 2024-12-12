"use client";
import ProofAttachemnt from "./ProofAttachemnt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getRequest } from "@/utils/utilFunctions";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";


const responsive = {
    largeScreen: {
        breakpoint: {min: 768, max: 5000},
        items: 5,
        slidesToSlide: 2
    },
    mediumScreen: {
        breakpoint: {min: 640, max: 767},
        items: 3,
    },
    mobile: {
        breakpoint: {min: 0, max: 639},
        items: 1,
        slidesToSlide: 1
    }
};

interface AttachmentsCarouselProps {
    getAttachmentsDataUrl: string
}

const AttachmentsCarousel:React.FC<AttachmentsCarouselProps> = ({getAttachmentsDataUrl}) => {
    const [data, setData] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [dummyData, setDummyData] = useState<string[] | null>(null);
    console.log(data);

    useEffect(() => {
        getRequest(getAttachmentsDataUrl, setData, setIsLoading);
        setDummyData(["/imageurl", "/imageurl", "/imageurl", "/imageurl", "/imageurl", "/imageurl"])
    }, [getAttachmentsDataUrl])

  return (
    <div className="w-[100%] xl:h-[215px] md:h-[130px] h-[194px]">
        {isLoading ? <Loader /> : 
            <Carousel 
                responsive={responsive}
                containerClass={dummyData && dummyData?.length < 5 ? "custom-container" : ""}
            >
                {dummyData && dummyData?.map((attachmentUrl, index) => (
                    <ProofAttachemnt key={index} attachmentUrl={attachmentUrl} />
                ))}
            </Carousel>
        }
    </div>
  )
}

export default AttachmentsCarousel