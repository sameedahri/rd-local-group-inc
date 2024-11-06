"use client";
import Checkbox from "../common/Checkbox";
import AcceptProofButton from "./AcceptProofButton";
import DeclineProofButton from "./DeclineProofButton";
import {RefObject, FormEvent} from "react";
import AgreeDialogue from "./AgreeDialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import exclamationMarkIcon from "/public/assets/images/cardDetails/exclamation-mark-icon.svg";
import Dialogue from "../common/Dialogue";
import {useRouter} from "next/navigation";
import RequiredMessage from "./RequiredMessage";


const ProofVerificationCard = () => {
    const router = useRouter();

    // Agree Dialogue
    let agreeDialogueRef: HTMLDialogElement | null;
    const setAgreeDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
        agreeDialogueRef = ref.current;
    };
    const showAgreeModal = () => {
        // toggle field required message
        const checkboxes = document.querySelectorAll('input[type="checkbox"], input[required="true"]');
        let isValid = true;
        for(let i = 0; i < checkboxes.length; i++) {
            const checkbox = checkboxes[i] as HTMLInputElement;
            const requiredMessageSpan = checkbox.nextElementSibling?.nextElementSibling;
            if(!checkbox.checked) {
                requiredMessageSpan?.classList.remove('opacity-0');
                requiredMessageSpan?.classList.add('opacity-100');
                isValid = false;
            } else {
                requiredMessageSpan?.classList.remove('opacity-100');
                requiredMessageSpan?.classList.add('opacity-0');
            }
        }
        if(!isValid) return;
        agreeDialogueRef?.showModal();
    };
    const checkboxOnchange = (e: FormEvent<HTMLInputElement>) => {
        // toggle field required message
        const checkbox = e.target as HTMLInputElement;
        const requiredMessageSpan = checkbox.nextElementSibling?.nextElementSibling;
        if(!checkbox.checked) {
            requiredMessageSpan?.classList.remove('opacity-0');
            requiredMessageSpan?.classList.add('opacity-100');
        } else {
            requiredMessageSpan?.classList.remove('opacity-100');
            requiredMessageSpan?.classList.add('opacity-0');
        }
    };
    const closeAgreeModal = () => {
        agreeDialogueRef?.close();
    };

    // Submit Revisions Dialogue
    let submitDialogueRef: HTMLDialogElement | null;
    const setSubmitDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
        submitDialogueRef = ref.current;
    };
    const showSubmitModal = () => {
        submitDialogueRef?.showModal();
    };
    const closeSubmitModal = () => {
        submitDialogueRef?.close();
        router.push('/addRevision');
    };

    // tailwind classes
    const liSpan1 = "text-[#3C3C3C] font-gilroySemibold md:text-[18px] text-[11px]"; 
    const liSpan2 = "text-[#636363] font-gilroyMedium md:text-[16px] text-[10px]";
  return (
    <>
        <div className="bg-[rgba(220,255,246,0.41)] rounded-[5px] md:p-9 p-5 sm:mr-[10px]">
            <h2 className="text-black font-gilroySemibold md:text-[35px] text-[20px] capitalize md:mb-1 mb-0">Proof Verification Checklist</h2>
            <p className="md:h-[60px] text-[#5F5F5F] font-gilroyRegular md:text-[20px] text-[11px] ml-1 md:mb-16 mb-6">Review all aspects of your proof and ensure that everything is correct</p>
            {/* List */}
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:md:gap-x-3 [&>li]:gap-x-2 [&>li:not(:last-child)]:md:mb-4 [&>li:not(:last-child)]:mb-2 [&>li]:relative md:mb-11 mb-7">
                    <li>
                        <Checkbox checkboxId="proofSize" onChange={checkboxOnchange} />
                        <label htmlFor="proofSize" className="select-none">
                            <span className={liSpan1}>Proof Size:</span>
                            <span className={liSpan2}> 4x4H  6x6W</span>
                        </label>
                        <RequiredMessage />
                    </li>
                    <li>
                        <Checkbox checkboxId="proofColor" onChange={checkboxOnchange} />
                        <label htmlFor="proofColor" className="select-none">
                            <span className={liSpan1}>Proof Color:</span>
                            <span className={liSpan2}> Black/Green/Blue</span>
                        </label>
                        <RequiredMessage />
                    </li>
                    <li>
                        <Checkbox checkboxId="proofDesign" onChange={checkboxOnchange} />
                        <label htmlFor="proofDesign" className="select-none">
                            <span className={liSpan1}>Proof Design:</span>
                            <span className={liSpan2}> Dark & Asthetic</span>
                        </label>
                        <RequiredMessage />
                    </li>
                    <li>
                        <Checkbox checkboxId="proofPhotos" onChange={checkboxOnchange} />
                        <label htmlFor="proofPhotos" className="select-none">
                            <span className={liSpan1}>Photos to use in proof:</span>
                            <span className={liSpan2}> Fresh foods/Nature</span>
                        </label>
                        <RequiredMessage />
                    </li>
                    <li>
                        <Checkbox checkboxId="businessAddress" onChange={checkboxOnchange} />
                        <label htmlFor="businessAddress" className="select-none">
                            <span className={liSpan1}>Business Address:</span>
                            <span className={liSpan2}> Bottom Right Corner</span>
                        </label>
                        <RequiredMessage />
                    </li>
                    <li>
                        <Checkbox checkboxId="businessContact" onChange={checkboxOnchange} />
                        <label htmlFor="businessContact" className="select-none">
                            <span className={liSpan1}>Business Contact:</span>
                            <span className={liSpan2}> Bottom Left Corner</span>
                        </label>
                        <RequiredMessage />
                    </li>
                    <li>
                        <Checkbox checkboxId="proofQR" onChange={checkboxOnchange} />
                        <label htmlFor="proofQR" className="select-none">
                            <span className={liSpan1}>Proof QR:</span>
                            <span className={liSpan2}> Center of Proof</span>
                        </label>
                        <RequiredMessage />
                    </li>
                </ul>
                {/* Buttons */}
                <div className="flex md:gap-x-2 gap-x-1">
                    <AcceptProofButton onClickFunction={showAgreeModal} />
                    <DeclineProofButton onClickFunction={showSubmitModal} />
                </div>  
        </div>
        <AgreeDialogue 
            setDialogueRef={setAgreeDialogueRef}
            closeDialogue={closeAgreeModal}
            agreeDialogue={() => {}}
            icon={verifyIcon}
            iconAlt="Verify"
            title="I certify that this proof is acceptable"
            message="and I can not make any further changes after this point"
            cancelButtonText="Go Back"
            agreeButtonText="Agree"
        />
        <Dialogue 
            setDialogueRef={setSubmitDialogueRef}
            closeDialogue={closeSubmitModal}
            icon={exclamationMarkIcon}
            iconAlt="Exclamation"
            title="Do you not agree with this proof?"
            message="Submit the changes you require within the next 48 hours"
            buttonText="Submit my revisions"
            isSubmitRevision={true}
        />
    </>
  )
}

export default ProofVerificationCard