"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import {RefObject, FormEvent, useState} from "react";
import LabelInput from "@/components/common/LabelInput";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {useRouter} from "next/navigation";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import PhoneMask from "@/components/common/PhoneMask";
import {ADMIN_USER_ADMINLIST} from "@/utils/pages-routes";
import {ADMIN_CREATE} from "@/utils/api-urls";
import {postRequest} from "@/utils/utilFunctions";
import useRedirect from "@/utils/useRedirect";


const AddUserContent = () => {
    const router = useRouter();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [data, setData] = useState();

    let dialogueRef: HTMLDialogElement | null = null;
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
        router.push(ADMIN_USER_ADMINLIST);
    };

    useRedirect(data, () => showModal());

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: countryCode + " " + phoneNumber,
            password: password
        };
        postRequest(ADMIN_CREATE, userData, setData);
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountryCode("+1");
        setPhoneNumber("");
    };

    return (
        <div className="content-wrapper">
            <div>
                <PageHeading heading="Add User" mb="mb-0" />
                <PageSubHeading subheading="View, add, edit details" />
            </div>
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
                    <LabelInput 
                        label="Password*" 
                        inputType="password" 
                        inputId="password" 
                        stateValue={password} 
                        setState={setPassword} 
                        minLength={6} 
                        maxLength={20} 
                    />
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                    <PhoneMask 
                        label="Phone number" 
                        inputId="phoneNumber" 
                        setPhoneNumber={setPhoneNumber} 
                        setCountryCode={setCountryCode} 
                        countryCode={countryCode} 
                    />
                    <div></div>
                </div>
                <div className="flex md:gap-x-4 gap-x-2 mt-12">
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

export default AddUserContent