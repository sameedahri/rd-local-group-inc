"use client";
import ProofAttachemnt from "./ProofAttachemnt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    attachmentsData: string[] | undefined,
    isLoading: boolean
}

const AttachmentsCarousel:React.FC<AttachmentsCarouselProps> = ({attachmentsData, isLoading}) => {
  return (
    <div className="w-[100%] xl:h-[215px] md:h-[130px] h-[194px]">
        {isLoading ? <Loader /> : 
            <Carousel 
                responsive={responsive}
                containerClass={attachmentsData && attachmentsData?.length < 5 ? "custom-container" : ""}
            >
                {attachmentsData && attachmentsData?.map((attachmentUrl, index) => (
                    <ProofAttachemnt key={index} attachmentUrl={attachmentUrl} />
                ))}
            </Carousel>
        }
    </div>
  )
}

export default AttachmentsCarousel