"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import LabelInput from "@/components/common/LabelInput";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {RefObject, FormEvent, useState, MouseEvent, useRef} from "react";
import {useRouter, useParams} from "next/navigation";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import DragAndDrop from "./DragAndDrop";
import deleteIcon from "/public/assets/images/admin/submitProof/delete-icon.svg";
import Image from 'next/image';
import {validationMessage} from "@/utils/utilFunctions";
import { postFormData } from "@/utils/utilFunctions";
import { PROOF_ADD } from "@/utils/api-urls";
import useRedirect from "@/utils/useRedirect";
import PhoneMask from "@/components/common/PhoneMask";


const SubmitProofContent = () => {
    const {id} = useParams();
    const router = useRouter();

    const [customerId, setCustomerId] = useState<string>("");
    const [businessName, setBusinessName] = useState<string>("");
    // const [businessContact, setBusinessContact] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [businessContact, setBusinessContact] = useState<string>("");
    const [businessAddress, setBusinessAddress] = useState<string>("");
    const [proofQR, setProofQR] = useState<string>("");
    const [proofTitle, setProofTitle] = useState<string>("");
    const [proofType, setProofType] = useState<string>("");
    const [proofColor, setProofColor] = useState<string>("");
    const [proofSize, setProofSize] = useState<string>("");
    const [proofDesign, setProofDesign] = useState<string>("");
    const [submissionDate, setSubmissionDate] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [files, setFiles] = useState<File[]>([]);
    const [data, setData] = useState(null);


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

    useRedirect(data, () => showModal());

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('businessId', String(id));
        formData.append('customerId', customerId);
        formData.append('businessName', businessName);
        formData.append('businessContact', businessContact);
        formData.append('businessAddress', businessAddress);
        formData.append('title', proofTitle);
        formData.append('type', proofType);
        formData.append('color', proofColor);
        formData.append('size', proofSize);
        formData.append('design', proofDesign);
        formData.append('proofQR', proofQR);
        formData.append('dateOfSubmission', submissionDate);
        formData.append('status', status);
        files.forEach(file => {
            formData.append('images', file);
        })
        postFormData(PROOF_ADD+`/${id}/submit`, formData, setData);
    };

    const resetForm = () => {
        setCustomerId("");
        setBusinessName("");
        setBusinessContact("");
        setBusinessAddress("");
        setProofTitle("");
        setProofType("");
        setProofColor("");
        setProofSize("");
        setProofDesign("");
        setProofQR("");
        setSubmissionDate("");
        setStatus("");
        setFiles([]);
        setUploadedFiles([]);
    };

    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
    const maxSizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const maxLimitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const handleImageDrop = (files: File[]) => {
        // hide previous message if file is valid
        validationMessage('#maxLimit', maxLimitTimeoutRef, true);
        if(uploadedFiles.length >= 20 || files.length >= 21) {
            validationMessage('#maxLimit', maxLimitTimeoutRef, false);
            return;
        }

        const MAX_FILE_SIZE = 1 * 1024 * 1024; // size in mbs
        const validFiles = files.filter(file => file.size <= MAX_FILE_SIZE);
        setFiles((prev) => [...prev, ...validFiles]);
        const newFiles = validFiles.map((file) => URL.createObjectURL(file));
        setUploadedFiles((prev) => [...prev, ...newFiles]);

        const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);
        validationMessage('#maxSize', maxSizeTimeoutRef, true);
        if(invalidFiles.length > 0) validationMessage('#maxSize', maxSizeTimeoutRef, false);
    };
    const removeImage = (e: MouseEvent<HTMLImageElement>) => {
        const target = e.target as HTMLImageElement;
        const id = target.parentElement?.parentElement?.id;
        setUploadedFiles(prevValue => prevValue.filter((_, i) => String(i) !== id));
        setFiles(files.filter((_, index) => index !== Number(id)));
    };

    // const imageNotShown = (e: MouseEvent<HTMLImageElement>) => {
    //     const target = e.target as HTMLImageElement;
    //     const embedElement = target?.nextSibling as HTMLEmbedElement;
    //     target.classList.add('hidden');
    //     embedElement.classList.remove('hidden');
    // };

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
                <LabelInput label="Customer ID*" inputType="text" inputId="customerId" stateValue={customerId} setState={setCustomerId} />
                <LabelInput label="Business Name*" inputType="text" inputId="businessName" stateValue={businessName} setState={setBusinessName} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                {/* <LabelInput label="Business Contact*" inputType="text" inputId="businessContact" stateValue={businessContact} setState={setBusinessContact} /> */}
                <PhoneMask 
                    label="Business Contact*" 
                    inputId="businessContact" 
                    setPhoneNumber={setBusinessContact} 
                    setCountryCode={setCountryCode} 
                    countryCode={countryCode}
                />
                <LabelInput label="Business Address*" inputType="text" inputId="businessAddress" stateValue={businessAddress} setState={setBusinessAddress} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <LabelInput label="Proof Title*" inputType="text" inputId="proofTitle" stateValue={proofTitle} setState={setProofTitle} />
                <LabelInput label="Proof Type*" inputType="text" inputId="proofType" stateValue={proofType} setState={setProofType} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <LabelInput label="Proof Color*" inputType="text" inputId="proofColor" stateValue={proofColor} setState={setProofColor} />
                <LabelInput label="Proof Size*" inputType="text" inputId="proofSize" stateValue={proofSize} setState={setProofSize} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <LabelInput label="Proof Design*" inputType="text" inputId="proofDesign" stateValue={proofDesign} setState={setProofDesign} />
                <LabelInput label="Proof QR*" inputType="text" inputId="proofQR" stateValue={proofQR} setState={setProofQR} />
            </div>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                <LabelInput label="Date Of Submission" inputType="date" inputId="submissionDate" stateValue={submissionDate} setState={setSubmissionDate} required={false} />
                <LabelInput label="Status" inputType="text" inputId="status" stateValue={status} setState={setStatus} required={false} />
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
                                // onError={imageNotShown}
                            />
                            {/* <embed 
                                src={src} 
                                type="application/pdf" 
                                width={100} 
                                height={100} 
                                className="hidden"
                            ></embed> */}
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