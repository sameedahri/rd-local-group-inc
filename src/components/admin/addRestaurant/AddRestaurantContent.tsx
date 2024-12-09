"use client";
import PageHeading from "@/components/common/PageHeading";
import LabelInput from "@/components/common/LabelInput";
import PhoneMask from "@/components/common/PhoneMask";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {RefObject, FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import FormSubHeading from "../adminCommon/FormSubHeading";
import {ADMIN_USER_RESTAURANTOWNERS} from "@/utils/pages-routes";
import { postRequest } from "@/utils/utilFunctions";
import { OWNER_ADD } from "@/utils/api-urls";
import useRedirect from "@/utils/useRedirect";


const AddRestaurantContent = () => {
    const router = useRouter();

    const [restaurantName, setRestaurantName] = useState<string>("");
    const [agreementDate, setAgreementDate] = useState<string>("");
    const [restaurantAddress, setRestaurantAddress] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [tabletopsSpecs, setTabletopsSpecs] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [ownerName, setOwnerName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [ownerCountryCode, setOwnerCountryCode] = useState<string>("+1");
    const [ownerContactNumber, setOwnerContactNumber] = useState<string>("");
    const [data, setData] = useState();

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
        redirectToRestaurantOwners();
    };

    const redirectToRestaurantOwners = () => {
        router.push(ADMIN_USER_RESTAURANTOWNERS);
    };

    useRedirect(data, () => showModal())

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const restaurantData = {
            restaurantName: restaurantName,
            agreementDate: agreementDate,
            address: restaurantAddress,
            contactNumber: countryCode + " " + contactNumber,
            tabletopSpecs: tabletopsSpecs,
            color: color,
            size: size,
            name: ownerName,
            email: email,
            ownerContactNumber: ownerCountryCode + " " + ownerContactNumber,
            officeNumber: "+2 1234 1234 55"
        };
        postRequest(OWNER_ADD, restaurantData, setData);
    };

    const resetForm = () => {
        setRestaurantName("");
        setAgreementDate("");
        setRestaurantAddress("");
        setCountryCode("+1");
        setContactNumber("");
        setTabletopsSpecs("");
        setColor("");
        setSize("");
        setOwnerName("");
        setEmail("");
        setOwnerCountryCode("+1");
        setOwnerContactNumber("");
    };

    return (
        <div className="content-wrapper">
            <PageHeading heading="Add Restaurant" />
            <form 
                className="bg-white rounded-[16px] md:p-10 px-7 py-10"
                onSubmit={submitForm}
            >
                <fieldset>
                    <FormSubHeading heading="Contract Details" />
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                        <LabelInput label="Restaurant Name*" inputType="text" inputId="restaurantName" stateValue={restaurantName} setState={setRestaurantName} />
                        <LabelInput label="Date Of Agreement*" inputType="date" inputId="agreementDate" stateValue={agreementDate} setState={setAgreementDate} />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Restaurant Address*" inputType="text" inputId="restaurantAddress" stateValue={restaurantAddress} setState={setRestaurantAddress} />
                        <PhoneMask 
                            label="Contact Number*" 
                            inputId="contactNumber" 
                            setPhoneNumber={setContactNumber} 
                            setCountryCode={setCountryCode} 
                            countryCode={countryCode}
                            required={true}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Tabletops Specs*" inputType="text" inputId="tabletopsSpecs" stateValue={tabletopsSpecs} setState={setTabletopsSpecs} />
                        <LabelInput label="Color*" inputType="text" inputId="color" stateValue={color} setState={setColor} />
                        <LabelInput label="Size*" inputType="text" inputId="size" stateValue={size} setState={setSize} />
                    </div>
                </fieldset>
                <fieldset className="mt-12">
                    <FormSubHeading heading="Restaurant Owner Details" />
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4">
                        <LabelInput label="Owner name*" inputType="text" inputId="ownerName" stateValue={ownerName} setState={setOwnerName} />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Email Address*" inputType="email" inputId="email" stateValue={email} setState={setEmail} />
                        <PhoneMask 
                            label="Owner Contact Number" 
                            inputId="ownerContactNumber" 
                            setPhoneNumber={setOwnerContactNumber} 
                            setCountryCode={setOwnerCountryCode} 
                            countryCode={ownerCountryCode}
                        />
                    </div>
                </fieldset>
                <div className="flex md:gap-x-4 gap-x-2 mt-12">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClickFunction={redirectToRestaurantOwners} />
                </div>
            </form>
            <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="New restaurant added successfully"
                buttonText="Close"
            />
        </div>
    )
}

export default AddRestaurantContent