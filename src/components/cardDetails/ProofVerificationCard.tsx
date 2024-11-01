"use client";
import Checkbox from "../common/Checkbox";
import AcceptProofButton from "./AcceptProofButton";
import DeclineProofButton from "./DeclineProofButton";
import {RefObject} from "react";
import AgreeDialogue from "./AgreeDialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import exclamationMarkIcon from "/public/assets/images/cardDetails/exclamation-mark-icon.svg";
import Dialogue from "../common/Dialogue";
import {useRouter} from "next/navigation";


const ProofVerificationCard = () => {
    const router = useRouter();

    // Agree Dialogue
    let agreeDialogueRef: HTMLDialogElement | null;
    const setAgreeDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
        agreeDialogueRef = ref.current;
    };
    const showAgreeModal = () => {
        agreeDialogueRef?.showModal();
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
    const liSpan1 = "text-[#3C3C3C] font-gilroySemibold text-[18px]"; 
    const liSpan2 = "text-[#636363] font-gilroyMedium text-[16px]";  
  return (
    <>
        <div className="bg-[rgba(220,255,246,0.41)] rounded-[5px] p-9">
            <h2 className="text-black font-gilroySemibold text-[36px] capitalize mb-1">Proof Verification Checklist</h2>
            <p className="h-[60px] text-[#5F5F5F] font-gilroyRegular text-[20px] ml-1 mb-16">Review all aspects of your proof and ensure that everything is correct</p>
            {/* List */}
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-x-3 [&>li:not(:last-child)]:mb-4 [&>li]:relative mb-11">
                    <li>
                        <Checkbox checkboxId="proofSize" />
                        <label htmlFor="proofSize" className="select-none">
                            <span className={liSpan1}>Proof Size:</span>
                            <span className={liSpan2}> 4x4H  6x6W</span>
                        </label>
                    </li>
                    <li>
                        <Checkbox checkboxId="proofColor" />
                        <label htmlFor="proofColor" className="select-none">
                            <span className={liSpan1}>Proof Color:</span>
                            <span className={liSpan2}> Black/Green/Blue</span>
                        </label>
                        <span className="absolute left-[35px] bottom-[-57px] text-[#F44336] font-gilroyRegular text-[12px]">This field is required*</span>
                    </li>
                    <li>
                        <Checkbox checkboxId="proofDesign" />
                        <label htmlFor="proofDesign" className="select-none">
                            <span className={liSpan1}>Proof Design:</span>
                            <span className={liSpan2}> Dark & Asthetic</span>
                        </label>
                    </li>
                    <li>
                        <Checkbox checkboxId="proofPhotos" />
                        <label htmlFor="proofPhotos" className="select-none">
                            <span className={liSpan1}>Photos to use in proof:</span>
                            <span className={liSpan2}> Fresh foods/Nature</span>
                        </label>
                    </li>
                    <li>
                        <Checkbox checkboxId="businessAddress" />
                        <label htmlFor="businessAddress" className="select-none">
                            <span className={liSpan1}>Business Address:</span>
                            <span className={liSpan2}> Bottom Right Corner</span>
                        </label>
                    </li>
                    <li>
                        <Checkbox checkboxId="businessContact" />
                        <label htmlFor="businessContact" className="select-none">
                            <span className={liSpan1}>Business Contact:</span>
                            <span className={liSpan2}> Bottom Left Corner</span>
                        </label>
                    </li>
                    <li>
                        <Checkbox checkboxId="proofQR" />
                        <label htmlFor="proofQR" className="select-none">
                            <span className={liSpan1}>Proof QR:</span>
                            <span className={liSpan2}> Center of Proof</span>
                        </label>
                    </li>
                </ul>
                {/* Buttons */}
                <div className="flex gap-x-2">
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