"use client";
import { useEffect, useRef, RefObject } from "react";
import Image from "next/image";
import Dialogue from "../common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import {useRouter} from "next/navigation";


interface AgreeDialogueProps {
    setDialogueRef: (ref: RefObject<HTMLDialogElement>) => void,
    closeDialogue: () => void,
    agreeDialogue: () => void,
    icon: string,
    iconAlt: string,
    title: string,
    message: string,
    cancelButtonText: string,
    agreeButtonText: string,
}

const AgreeDialogue: React.FC<AgreeDialogueProps> = ({setDialogueRef, closeDialogue, icon, iconAlt, title, message, cancelButtonText, agreeButtonText}) => {
    const router = useRouter();
    const dialogueRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        setDialogueRef(dialogueRef);
    }, [setDialogueRef])

    // Dialogue
    let thanksDialogueRef: HTMLDialogElement | null;
    const setThanksDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
        thanksDialogueRef = ref.current;
    };
    const showThanksModal = () => {
        closeDialogue();
        thanksDialogueRef?.showModal();
    };
    const closeThanksModal = () => {
        router.push('/dashboard');
        thanksDialogueRef?.close();
    }

    return (
        <>
            <dialog 
                ref={dialogueRef}
                className="w-[480px] bg-white rounded-[11px] p-7"
            >
                <div className="flex flex-col items-center">
                    <Image src={icon} alt={iconAlt} width={55} height={55} />
                    <div className="text-center text-heading md:text-[22px] text-[20px] mt-4">
                        <h1 className="font-gilroySemibold">{title}</h1>
                        <p className="font-gilroyRegular">{message}</p>
                    </div>
                    <div className="flex gap-x-2 mt-6">
                        <button 
                            type="button" 
                            className={`w-[113px] h-[53px] rounded-[26px] border border-inputOutline bg-[rgba(250,250,250,0.24)]
                                text-[#D59483] font-gilroyBold text-[16px] hover:bg-inputOutline hover:text-white transition`}
                            onClick={closeDialogue}
                        >{cancelButtonText}</button>
                        <button 
                            type="button" 
                            className={`w-[113px] h-[53px] rounded-[26px] border border-inputOutline bg-[#D59483]
                                text-white font-gilroyBold text-[16px] hover:bg-white hover:text-[#D59483] transition`}
                            onClick={showThanksModal}
                        >{agreeButtonText}</button>
                    </div>
                </div>
            </dialog>
            {/* styles */}
            <style jsx>{`
                ::backdrop {
                    background-color: rgba(0, 0, 0, 0.58);
                }
            `}</style>
            <Dialogue 
                setDialogueRef={setThanksDialogueRef}
                closeDialogue={closeThanksModal}
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="Proof accepted successfully"
                buttonText="Close"
            />
        </>
    )
}

export default AgreeDialogue