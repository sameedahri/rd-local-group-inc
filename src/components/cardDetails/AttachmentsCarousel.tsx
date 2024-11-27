"use client";
import ProofAttachemnt from "./ProofAttachemnt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
    console.log(getAttachmentsDataUrl)
    // lessThan5 will be replaced by attachments data length
    const lessThan5 = false;

  return (
    <div className="w-[100%] xl:h-[215px] md:h-[130px] h-[194px]">
        <Carousel 
            responsive={responsive}
            containerClass={lessThan5 ? "custom-container" : ""}
        >
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
            <ProofAttachemnt />
        </Carousel>
    </div>
  )
}

export default AttachmentsCarousel