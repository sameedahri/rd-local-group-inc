"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import LabelInput from "@/components/common/LabelInput";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {RefObject, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import { usePost } from "@/utils/usePost";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import DragAndDrop from "./DragAndDrop";


const SubmitProofContent = () => {
    const router = useRouter();
    const {postData, data} = usePost("/posts");

    const [proofTitle, setProofTitle] = useState<string>("");
    const [proofType, setProofType] = useState<string>("");
    const [proofColor, setProofColor] = useState<string>("");
    const [proofSize, setProofSize] = useState<string>("");
    const [proofDesign, setProofDesign] = useState<string>("");
    const [submissionDate, setSubmissionDate] = useState<string>("");

    let dialogueRef: HTMLDialogElement | null;
    const setDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
        dialogueRef = ref.current;
    };
    const showModal = () => {
        dialogueRef?.showModal();
    };
    const closeModal = () => {
        resetForm();
        dialogueRef?.close();
        redirectToAdminUser();
    };

    const redirectToAdminUser = () => {
        router.push('/admin');
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            proofTitle: proofTitle,
            proofType: proofType,
            proofColor: proofColor,
            proofSize: proofSize,
            proofDesign: proofDesign,
            submissionDate: submissionDate
        };
        postData(userData);
        showModal();
    };
    console.log(data);

    const resetForm = () => {
        setProofTitle("");
        setProofType("");
        setProofColor("");
        setProofSize("");
        setProofDesign("");
        setSubmissionDate("");
    };

  return (
    <div className="content-wrapper">
        <div>
            <PageHeading heading="Submit Proof" mb="mb-0" />
            <PageSubHeading subheading="View, add, edit details" />
        </div>
        <form 
            className="bg-white rounded-[16px] md:p-10 px-7 py-10"
            onSubmit={submitForm}
        >
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                <LabelInput label="Proof Title*" inputType="text" inputId="proofTitle" stateValue={proofTitle} setState={setProofTitle} />
                <LabelInput label="Proof Type*" inputType="text" inputId="proofType" stateValue={proofType} setState={setProofType} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <LabelInput label="Proof Color*" inputType="text" inputId="proofColor" stateValue={proofColor} setState={setProofColor} />
                <LabelInput label="Proof Size*" inputType="text" inputId="proofSize" stateValue={proofSize} setState={setProofSize} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <LabelInput label="Proof Design*" inputType="text" inputId="proofDesign" stateValue={proofDesign} setState={setProofDesign} />
                <LabelInput label="Date Of Submission" inputType="date" inputId="submissionDate" stateValue={submissionDate} setState={setSubmissionDate} required={false} />
            </div>
            <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <DragAndDrop label="Upload Pictures*" inputId="pictures" />
            </div>
            <div className="flex md:gap-x-4 gap-x-2 mt-8">
                <AddButton text="Add" />
                <CancelButton text="Back" onClickFunction={redirectToAdminUser} />
            </div>
        </form>
        <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="New user added successfully"
                buttonText="Close"
            />
    </div>
  )
}

export default SubmitProofContent