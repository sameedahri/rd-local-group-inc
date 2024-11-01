"use client";
import PageHeading from "../common/PageHeading";
import AddButton from "../common/AddButton";
import CancelButton from "../common/CancelButton";
import LabelInput from "../common/LabelInput";
import LabelTextArea from "../common/LabelTextArea";
import {useState, RefObject, FormEvent} from "react";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import Dialogue from "../common/Dialogue";
import {useRouter} from "next/navigation";


const AddRevisionContent = () => {
    const router = useRouter();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [changes, setChanges] = useState<string>("");

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
        router.push('/dashboard');
    };

    const redirectToCardDetails = () => {
        router.back();
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            changes: changes
        };
        console.log(data)
        showModal();
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setChanges("");
    };

  return (
    <>
        <PageHeading heading="Add Revisions" />
        <form 
            className="bg-white rounded-[16px] md:p-10 px-7 py-10"
            onSubmit={(e) => submitForm(e)}
        >
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                <LabelInput label="First name*" inputType="text" inputId="firstName" stateValue={firstName} setState={setFirstName} />
                <LabelInput label="Last name*" inputType="text" inputId="lastName" stateValue={lastName} setState={setLastName} />
            </div>
            <div className="mt-8">
                <LabelTextArea label="What do you want changed?" textAreaId="changes" stateValue={changes} setState={setChanges} />
            </div>
            <div className="flex md:gap-x-4 gap-x-2 mt-8">
                <AddButton text="Submit" />
                <CancelButton text="Cancel" onClick={redirectToCardDetails} />
            </div>
        </form>
        <Dialogue
            setDialogueRef={setDialogueRef}
            closeDialogue={closeModal}
            icon={verifyIcon}
            iconAlt="Verify"
            title="Thank you!"
            message="Proof revision submitted successfully"
            buttonText="Close"
        />
    </>
  )
}

export default AddRevisionContent