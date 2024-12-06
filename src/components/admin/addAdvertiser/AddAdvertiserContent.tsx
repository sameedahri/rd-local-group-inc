"use client";
import PageHeading from "@/components/common/PageHeading";
import FormSubHeading from "../adminCommon/FormSubHeading";
import LabelInput from "@/components/common/LabelInput";
import {RefObject, FormEvent, useState, useEffect} from "react";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {useRouter} from "next/navigation";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import Checkbox from "@/components/common/Checkbox";
import {ADMIN_USER_ADVERTISERS} from "@/utils/pages-routes";
import { ADVERTISER_ADD } from "@/utils/api-urls";
import { postRequest } from "@/utils/utilFunctions";
import PhoneMask from "@/components/common/PhoneMask";
import SetupFeeInput from "./SetupFeeInput";


const AddAdvertiserContent = () => {
    const router = useRouter();

    const [companyName, setCompanyName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [zip, setZip] = useState<string>("");

    const [ownerName, setOwnerName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [officeNumber, setOfficeNumber] = useState<string>("");
    const [ownerCountryCode, setOwnerCountryCode] = useState<string>("+1");
    const [ownerContactNumber, setOwnerContactNumber] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [contactNumber, setContactNumber] = useState<string>("");
    const [adveriserAgreement, setAdveriserAgreement] = useState<string>("");

    const [adPrice, setAdPrice] = useState<string>("");
    const [isOneTimePayment, setIsOneTimePayment] = useState<boolean>(true);
    const [setupFee, setSetupFee] = useState<string>("");
    const [totalAmount, setTotalAmount] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [nameOnCard, setNameOnCard] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    const [expDate, setExpDate] = useState<string>("");
    const [cvc, setCvc] = useState<string>("");

    const [chequeNumber, setChequeNumber] = useState<string>("");
    const [phoneNumberOnCheque, setPhoneNumberOnCheque] = useState<string>("");
    const [routeNumber, setRouteNumber] = useState<string>("");
    const [accNumber, setAccNumber] = useState<string>("");
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
        redirectToAdvertiser();
    };

    const redirectToAdvertiser = () => {
        router.push(ADMIN_USER_ADVERTISERS);
    };

    useEffect(() => {
        if(typeof data === "object" && data !== null) {
            showModal();
        }
    }, [data])

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const advertiserData = {
            companyName: companyName,
            address: address,
            city: city,
            state: state,
            zip: zip,

            ownerName: ownerName,
            email: email,
            officeNumber: officeNumber,
            ownerContactNumber: ownerContactNumber,
            contactNumber: contactNumber,
            adAgreementDetails: adveriserAgreement,

            adPrice: parseFloat(adPrice),
            isOneTimePayment: isOneTimePayment,
            setupFee: isOneTimePayment ? 0.00 : parseFloat(setupFee),
            totalDueAmount: parseFloat(totalAmount),

            cardNumber: cardNumber,
            nameOnCard: nameOnCard,
            cardBillingStreet: street,
            cardZipCode: zipCode,
            cardExpDate: expDate,
            cardCvc: cvc,

            nameOnCheck: "",
            checkNumber: chequeNumber,
            phoneNumberOnCheck: phoneNumberOnCheque,
            eCheckRouteNumber: routeNumber,
            eCheckAccountNumber: accNumber
        };
        postRequest(ADVERTISER_ADD, advertiserData, setData);
    };

    const resetForm = () => {
        setCompanyName("");
        setAddress("");
        setCity("");
        setState("");
        setZip("");
        setOwnerName("");
        setEmail("");
        setOfficeNumber("");
        setOwnerCountryCode("+1");
        setOwnerContactNumber("");
        setCountryCode("+1");
        setContactNumber("");
        setAdveriserAgreement("");
        setAdPrice("");
        setTotalAmount("");
        setCardNumber("");
        setNameOnCard("");
        setStreet("");
        setZipCode("");
        setExpDate("");
        setCvc("");
        setChequeNumber("");
        setPhoneNumberOnCheque("");
        setRouteNumber("");
        setAccNumber("");
    };

    const checkboxOnchange = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        document.querySelectorAll('input[type="checkbox"]').forEach(_item => {
            const item = _item as HTMLInputElement;
            if(item.id === target.id) {
                // do nothing 
            } else {
                item.checked = false;
            }
        });
        if(target.id === "onePayment") {
            setIsOneTimePayment(true)
        } else {
            setIsOneTimePayment(false)
        }
    };

    return (
        <div className="content-wrapper">
            <PageHeading heading="Add Advertiser" />
            <form 
                    className="bg-white rounded-[16px] md:p-10 px-7 py-10"
                    onSubmit={submitForm}
            >
                <fieldset>
                    <FormSubHeading heading="Company Details" />
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4">
                        <LabelInput label="Company name*" inputType="text" inputId="companyName" stateValue={companyName} setState={setCompanyName} />
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Address*" inputType="text" inputId="address" stateValue={address} setState={setAddress} />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="City*" inputType="text" inputId="city" stateValue={city} setState={setCity} />
                        <LabelInput label="State*" inputType="text" inputId="state" stateValue={state} setState={setState} />
                        <LabelInput label="Zip*" inputType="text" inputId="zip" stateValue={zip} setState={setZip} />
                    </div>
                </fieldset>
                <fieldset className="mt-12">
                    <FormSubHeading heading="Owner Details" />
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                        <LabelInput label="Owner name*" inputType="text" inputId="ownerName" stateValue={ownerName} setState={setOwnerName} />
                        <LabelInput label="Email Address" inputType="email" inputId="email" stateValue={email} setState={setEmail} required={false} />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Office Number*" inputType="text" inputId="officeNumber" stateValue={officeNumber} setState={setOfficeNumber} />
                        <PhoneMask 
                            label="Owner Contact Number" 
                            inputId="ownerContactNumber" 
                            setPhoneNumber={setOwnerContactNumber} 
                            setCountryCode={setOwnerCountryCode} 
                            countryCode={ownerCountryCode}
                            required={true}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <PhoneMask 
                            label="Contact Number" 
                            inputId="contactNumber" 
                            setPhoneNumber={setContactNumber} 
                            setCountryCode={setCountryCode} 
                            countryCode={countryCode}
                        />
                        <LabelInput label="Advertiser Agrees to Place Color Ad on" inputType="text" inputId="adveriserAgreement" stateValue={adveriserAgreement} setState={setAdveriserAgreement} required={false} bottomMessage="Display/Special Boards" />
                    </div>
                </fieldset>
                <fieldset className="md:mt-12 mt-14">
                    <FormSubHeading heading="Pricing Details" />
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4">
                        <LabelInput 
                            label="Ad Price*" 
                            inputType="number" 
                            inputId="adPrice" 
                            stateValue={adPrice} 
                            setState={setAdPrice} 
                        />
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <div className="flex md:items-center gap-x-2">
                            <Checkbox checkboxId="onePayment" onChange={checkboxOnchange} width="w-[22px] min-w-[22px]" height="h-[20px] min-h-[20px]" />
                            <label htmlFor="onePayment" className="text-[#262626] font-gilroySemibold md:text-[16px] text-[14px]">A. One payment paid at signing of this agreement</label>
                        </div>
                        <div className="flex md:items-center gap-x-2">
                            <Checkbox checkboxId="twoPayments" onChange={checkboxOnchange} width="w-[22px] min-w-[22px]" height="h-[20px] min-h-[20px]" required={false} />
                            <label htmlFor="twoPayments" className="text-[#262626] font-gilroySemibold md:text-[16px] text-[14px]">
                                <span>B. 2 payments: deposit 50% at signing of this agreement and final payment 30 days later</span>
                                <SetupFeeInput stateValue={setupFee} setState={setSetupFee} isOneTimePayment={isOneTimePayment} />
                                <span>Setup Fee.</span>
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Total Due Amount*" inputType="number" inputId="totalAmount" stateValue={totalAmount} setState={setTotalAmount} />
                    </div>
                </fieldset>
                <fieldset className="mt-12">
                    <FormSubHeading heading="Credit Card Info (Make sure to use billing info)" />
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                        <LabelInput label="Card Number*" inputType="text" inputId="cardNumber" stateValue={cardNumber} setState={setCardNumber} />
                        <LabelInput label="Name on Card*" inputType="text" inputId="nameOnCard" stateValue={nameOnCard} setState={setNameOnCard} required={false} />
                    </div>
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Street*" inputType="text" inputId="street" stateValue={street} setState={setStreet} />
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Zip Code*" inputType="text" inputId="zipCode" stateValue={zipCode} setState={setZipCode} />
                        <LabelInput label="Exp Date*" inputType="text" inputId="expDate" stateValue={expDate} setState={setExpDate} />
                        <LabelInput label="CVC*" inputType="text" inputId="cvc" stateValue={cvc} setState={setCvc} />
                    </div>
                </fieldset>
                <fieldset className="mt-12">
                    <FormSubHeading heading="Cheque Info" />
                    <div className="grid md:grid-cols-1 md:gap-x-4 gap-y-4">
                        <LabelInput label="Name on Cheque*" inputType="text" inputId="nameOnCheque" stateValue={street} setState={setStreet} />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="Cheque Number*" inputType="text" inputId="chequeNumber" stateValue={chequeNumber} setState={setChequeNumber} />
                        <LabelInput label="Phone Number on Cheque*" inputType="text" inputId="phoneNumberOnCheque" stateValue={phoneNumberOnCheque} setState={setPhoneNumberOnCheque} />
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                        <LabelInput label="E-Cheque Info - Route Number*" inputType="text" inputId="routeNumber" stateValue={routeNumber} setState={setRouteNumber} />
                        <LabelInput label="Acct Number*" inputType="text" inputId="accNumber" stateValue={accNumber} setState={setAccNumber} />
                    </div>
                </fieldset>
                <div className="flex md:gap-x-4 gap-x-2 mt-12">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClickFunction={redirectToAdvertiser} />
                </div>
            </form>
            <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="New advertiser added successfully"
                buttonText="Close"
            />
        </div>
    )
}

export default AddAdvertiserContent