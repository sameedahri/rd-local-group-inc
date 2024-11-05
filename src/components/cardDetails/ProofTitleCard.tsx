"use client";
import calendarIcon from "/public/assets/images/cardDetails/calender-icon.svg";
import Image from "next/image";


const ProofTitleCard = () => {
    
    // tailwind classes
    const dot = "md:w-[7px] w-[4px] md:h-[7px] h-[4px] bg-[#3C3C3C] rounded-full md:mt-0 mt-[5px]";
    const liSpan1 = "text-[#3C3C3C] font-gilroySemibold md:text-[18px] text-[11px]"; 
    const liSpan2 = "text-[#636363] font-gilroyMedium md:text-[16px] text-[10px]";

  return (
    <div className="bg-[rgba(255,248,247,0.58)] rounded-[5px] md:p-9 p-5 sm:mr-[10px]">
        <h2 className="text-black font-gilroySemibold md:text-[35px] text-[20px] capitalize md:mb-1 mb-0">Proof Title</h2>
        <div className="flex gap-x-1 md:mb-11 mb-6">
            <Image src={calendarIcon} alt="Calendar" width={25} height={25} className="md:w-[25px] w-[15px] md:h-[25px] h-[15px]" />
            <p className="md:text-[16px] text-[10px] capitalize">
                <span className="text-[#3C3C3C] font-gilroyMedium">Submission Date:</span>
                <span className="text-[#D59483] font-gilroySemibold"> 12 Dec, 12:00am</span>
            </p>
        </div>
        <div>
            <h3 className="text-black font-gilroySemibold md:text-[24px] text-[14px] md:mb-6 mb-2">Description:</h3>
            {/* List */}
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:md:gap-x-3 [&>li]:gap-x-2 [&>li:not(:last-child)]:md:mb-4 [&>li:not(:last-child)]:mb-2">
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Proof Size:</span>
                        <span className={liSpan2}> 4x4H  6x6W</span>
                    </div>
                </li>
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Proof Color:</span>
                        <span className={liSpan2}> Black/Green/Blue</span>
                    </div>
                </li>
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Proof Design:</span>
                        <span className={liSpan2}> Dark & Asthetic</span>
                    </div>
                </li>
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Photos to use in proof:</span>
                        <span className={liSpan2}> Fresh foods/Nature</span>
                    </div>
                </li>
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Business Address:</span>
                        <span className={liSpan2}> Bottom Right Corner</span>
                    </div>
                </li>
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Business Contact:</span>
                        <span className={liSpan2}> Bottom Left Corner</span>
                    </div>
                </li>
                <li>
                    <div className={dot}></div>
                    <div>
                        <span className={liSpan1}>Proof QR:</span>
                        <span className={liSpan2}> Center of Proof</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProofTitleCard