"use client";
import LabelInput from "../common/LabelInput";
import CancelButton from "../common/CancelButton";
import AddButton from "../common/AddButton";
import PageHeading from "../common/PageHeading";
import {useRouter} from "next/navigation";
import Dialogue from "../common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import {RefObject, FormEvent, useState} from "react";
import PhoneMask from "../common/PhoneMask";
import { postRequest } from "@/utils/utilFunctions";
import useRedirect from "@/utils/useRedirect";

interface AddExStaffContentProps {
    urlToDashboard: string,
    postStaffUrl: string
}

const AddExStaffContent:React.FC<AddExStaffContentProps> = ({urlToDashboard, postStaffUrl}) => {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [contactNumberCountryCode, setContactNumberCountryCode] = useState<string>("+1");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [officeNumberCountryCode, setOfficeNumberCountryCode] = useState<string>("+1");
    const [officeNumber, setOfficeNumber] = useState<string>("");

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
        redirectToDashboard();
    };

    const redirectToDashboard = () => {
        router.push(urlToDashboard);
    };

    useRedirect(data, () => showModal());

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const staffData = {
            name: name,
            email: email,
            contactNumber: contactNumberCountryCode + " " + contactNumber,
            officeNumber: officeNumberCountryCode + " " + officeNumber
        };
        postRequest(postStaffUrl, staffData, setData, false, false);
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setContactNumberCountryCode("+1");
        setContactNumber("");
        setOfficeNumberCountryCode("+1");
        setOfficeNumber("");
    };

    return (
        <div className="content-wrapper">
            <PageHeading heading="Add Extra Staff" />
            <form 
                className="bg-white rounded-[16px] md:p-10 px-7 py-10"
                onSubmit={submitForm}
            >
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                    <LabelInput label="Name*" inputType="text" inputId="name" stateValue={name} setState={setName} />
                    <LabelInput label="Email*" inputType="email" inputId="email" stateValue={email} setState={setEmail} />
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                    <PhoneMask 
                        label="Contact number" 
                        inputId="contactNumber" 
                        setPhoneNumber={setContactNumber} 
                        setCountryCode={setContactNumberCountryCode} 
                        countryCode={contactNumberCountryCode} 
                    />
                    <PhoneMask 
                        label="Office number" 
                        inputId="officeNumber" 
                        setPhoneNumber={setOfficeNumber} 
                        setCountryCode={setOfficeNumberCountryCode} 
                        countryCode={officeNumberCountryCode} 
                    />
                </div>
                <div className="flex md:gap-x-4 gap-x-2 mt-8">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClickFunction={redirectToDashboard} />
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
        </div>
    )
}

export default AddExStaffContent