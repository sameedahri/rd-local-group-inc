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
// import { postRequest } from "@/utils/utilFunctions";
// import useRedirect from "@/utils/useRedirect";


interface AddRevisionContentProps {
    urlToDashboard: string,
    postRevisionUrl: string
}

const AddRevisionContent:React.FC<AddRevisionContentProps> = ({urlToDashboard, postRevisionUrl}) => {
    const router = useRouter();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [changes, setChanges] = useState<string>("");
    // const [data, setData] = useState(null);

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
        router.push(urlToDashboard);
    };

    const redirectToCardDetails = () => {
        router.back();
    };

    // useRedirect(data, () => showModal());

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const revisionData = {
            firstName: firstName,
            lastName: lastName,
            changes: changes
        };
        console.log(revisionData)
        // postRequest(postRevisionUrl, revisionData, setData);
        showModal();
    };
    console.log(postRevisionUrl)

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setChanges("");
    };

  return (
    <div className="content-wrapper">
        <PageHeading heading="Add Revisions" />
        <form 
            className="bg-white rounded-[16px] md:p-10 px-7 py-10"
            onSubmit={submitForm}
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
                <CancelButton text="Cancel" onClickFunction={redirectToCardDetails} />
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
    </div>
  )
}

export default AddRevisionContent