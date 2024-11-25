"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import LabelInput from "@/components/common/LabelInput";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {RefObject, FormEvent, useState, MouseEvent} from "react";
import {useRouter} from "next/navigation";
import { usePost } from "@/utils/usePost";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import DragAndDrop from "./DragAndDrop";
import deleteIcon from "/public/assets/images/admin/submitProof/delete-icon.svg";
import Image from 'next/image';


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
        redirectToPreviousPage();
    };

    const redirectToPreviousPage = () => {
        router.back();
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

    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
    const handleImageDrop = (files: File[]) => {
        // const newImages = files.map((file) => URL.createObjectURL(file)); // Preview URLs
        // setUploadedImages((prev) => [...prev, ...newImages]);

        if(uploadedFiles.length >= 20) {
            alert("Maximum limit to upload files reached");
            return;
        }

        const MAX_FILE_SIZE = 1 * 1024 * 1024; // size in mbs
        const validFiles = files.filter(file => file.size <= MAX_FILE_SIZE);
        const newFiles = validFiles.map((file) => URL.createObjectURL(file));
        setUploadedFiles((prev) => [...prev, ...newFiles]);

        const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);
        if(invalidFiles.length > 0) {
            alert("File size must be not be greater than 1 mb");
        }
    };
    const removeImage = (e: MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        const id = target.parentElement?.parentElement?.id;
        setUploadedFiles(prevValue => prevValue.filter((_, i) => String(i) !== id));
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
                <DragAndDrop 
                    onDrop={handleImageDrop} 
                    label="Upload Pictures*" 
                    inputId="pictures" 
                />
                {/* uploaded images */}
                <div className="flex flex-wrap gap-[10px] mt-[20px]">
                    {uploadedFiles.map((src, index) => (
                        <div key={index} id={String(index)} className="relative">
                            <div className="flex justify-center items-center absolute top-[-5px] right-[-5px] md:w-[24px] w-[18px] md:h-[24px] h-[18px] rounded-full bg-white hover:scale-125 border shadow-md cursor-pointer transition">
                                <Image onClick={removeImage} src={deleteIcon} alt="Delete" width={16} height={18} className="md:w-[16px] w-[14px] md:h-[18px] h-[14px]" />
                            </div>
                            <Image
                                src={src}
                                alt={`Uploaded ${index}`}
                                width={100}
                                height={100}
                                className="md:w-[100px] w-[58px] md:h-[100px] h-[58px] object-cover rounded-[10px] border border-[#F3EEED]"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:gap-x-4 gap-x-2 mt-[45px]">
                <AddButton text="Add" />
                <CancelButton text="Back" onClickFunction={redirectToPreviousPage} />
            </div>
        </form>
        <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="Proof submited successfully"
                buttonText="Close"
            />
    </div>
  )
}

export default SubmitProofContent