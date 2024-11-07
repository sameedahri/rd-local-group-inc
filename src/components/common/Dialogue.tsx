"use client";
import { useEffect, useRef, RefObject } from "react";
import Image from "next/image";


interface DialogueProps {
    setDialogueRef: (ref: RefObject<HTMLDialogElement>) => void,
    closeDialogue: () => void,
    icon: string,
    iconAlt: string,
    title: string,
    message: string,
    buttonText: string,
    isSubmitRevision?: boolean
}

const Dialogue: React.FC<DialogueProps> = ({setDialogueRef, closeDialogue, icon, iconAlt, title, message, buttonText, isSubmitRevision=false}) => {
    const dialogueRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        setDialogueRef(dialogueRef);
    }, [setDialogueRef])

    return (
        <>
            <dialog 
                ref={dialogueRef}
                className="w-[480px] bg-white rounded-[11px] p-7"
            >
                <div className="flex flex-col items-center">
                    <Image src={icon} alt={iconAlt} width={55} height={55} />
                    <div className="text-center text-heading md:text-[22px] text-[19px] mt-4">
                        <h1 className="font-gilroySemibold">{title}</h1>
                        <p className="font-gilroyRegular">{message}</p>
                    </div>
                    <button 
                        type="button" 
                        className={`${isSubmitRevision ? 'w-[205px]' : 'w-[113px]'} h-[53px] rounded-[26px] border border-inputOutline bg-[rgba(250,250,250,0.24)]
                            text-[#D59483] font-gilroyBold text-[16px] mt-5 hover:bg-inputOutline hover:text-white transition`}
                        onClick={closeDialogue}
                    >{buttonText}</button>
                </div>
            </dialog>
            {/* styles */}
            <style jsx>{`
                ::backdrop {
                    background-color: rgba(0, 0, 0, 0.58);
                }
            `}</style>
        </>
    )
}

export default Dialogue