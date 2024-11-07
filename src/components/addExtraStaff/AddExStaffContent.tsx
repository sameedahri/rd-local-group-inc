"use client";
import LabelInput from "../common/LabelInput";
import PhoneInput from "./PhoneInput";
import CancelButton from "../common/CancelButton";
import AddButton from "../common/AddButton";
import PageHeading from "../common/PageHeading";
import {useRouter} from "next/navigation";
import Dialogue from "../common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import {RefObject, FormEvent, useState} from "react";
import { usePost } from "@/utils/usePost";


interface phoneNumberProps {
    countryCode: string,
    phoneNumber: string
}

const AddExStaffContent = () => {
    const router = useRouter();
    const {postData, data} = usePost("/posts");

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<phoneNumberProps>({countryCode: "+1", phoneNumber: ""});

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
        redirectToDashboard();
    };

    const redirectToDashboard = () => {
        router.push('/dashboard');
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const staffData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber.countryCode + " " + phoneNumber.phoneNumber
        };
        postData(staffData);
        showModal();
    };
    console.log(data);

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber({countryCode: "+1", phoneNumber: ""});
    };

    return (
        <>
            <PageHeading heading="Add Extra Staff" />
            <form 
                className="bg-white rounded-[16px] md:p-10 px-7 py-10"
                onSubmit={submitForm}
            >
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                    <LabelInput label="First name*" inputType="text" inputId="firstName" stateValue={firstName} setState={setFirstName} />
                    <LabelInput label="Last name*" inputType="text" inputId="lastName" stateValue={lastName} setState={setLastName} />
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                    <LabelInput label="Email*" inputType="email" inputId="email" stateValue={email} setState={setEmail} />
                    <PhoneInput label="Phone number" inputId="phoneNumber" stateValue={phoneNumber} setState={setPhoneNumber} />
                </div>
                <div className="flex md:gap-x-4 gap-x-2 mt-8">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClick={redirectToDashboard} />
                </div>
            </form>
            <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="New staff added successfully"
                buttonText="Close"
            />
        </>
    )
}

export default AddExStaffContent