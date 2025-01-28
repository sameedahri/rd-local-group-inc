"use client";
import Image from "next/image";

interface ProofAttachemntProps {
  attachmentUrl: string
}

const ProofAttachemnt:React.FC<ProofAttachemntProps> = ({attachmentUrl}) => {
  return (
    <div className="sm:w-[calc(100%-10px)] w-[100%] xl:h-[215px] md:h-[130px] h-[194px] rounded-[5px] bg-[#C4C4C4] border-[5px] border-transparent hover:border-[#EBC0B4]">
      <Image src={attachmentUrl} alt="Attachment" width={150} height={130} className="w-full h-full" />
    </div>
  )
}

export default ProofAttachemnt