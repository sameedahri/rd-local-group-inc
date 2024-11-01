"use client";
import calendarIcon from "/public/assets/images/cardDetails/calender-icon.svg";
import Image from "next/image";


const ProofTitleCard = () => {
    
    // tailwind classes
    const dot = "w-[7px] h-[7px] bg-[#3C3C3C] rounded-full";
    const liSpan1 = "text-[#3C3C3C] font-gilroySemibold text-[18px]"; 
    const liSpan2 = "text-[#636363] font-gilroyMedium text-[16px]";  

  return (
    <div className="bg-[rgba(255,248,247,0.58)] rounded-[5px] p-9">
        <h2 className="text-black font-gilroySemibold text-[36px] capitalize mb-1">Proof Title</h2>
        <div className="flex gap-x-1 mb-11">
            <Image src={calendarIcon} alt="Calendar" width={25} height={25} />
            <p className="text-[16px] capitalize">
                <span className="text-[#3C3C3C] font-gilroyMedium">Submission Date:</span>
                <span className="text-[#D59483] font-gilroySemibold"> 12 Dec, 12:00am</span>
            </p>
        </div>
        <div>
            <h3 className="text-black font-gilroySemibold text-[24px] mb-6">Description:</h3>
            {/* List */}
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-x-3 [&>li:not(:last-child)]:mb-4">
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