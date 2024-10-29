"use client";
import LabelInput from "../common/LabelInput";
import PhoneInput from "./PhoneInput";
import CancelButton from "../common/CancelButton";
import AddButton from "../common/AddButton";
import PageHeading from "../common/PageHeading";
import {useRouter} from "next/navigation";


const AddExStaffContent = () => {
    const router = useRouter();

    const redirectToDashboard = () => {
        router.push('/dashboard')
    };

    const submitForm = (e: any) => {
        e.preventDefault();
    };

    return (
        <div>
            <PageHeading heading="Add Extra Staff" />
            <form 
                className="bg-white rounded-[16px] md:p-10 px-7 py-10"
                onSubmit={(e) => submitForm(e)}
            >
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                    <LabelInput label="First name*" inputType="text" />
                    <LabelInput label="Last name*" inputType="text" />
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                    <LabelInput label="Email*" inputType="email" />
                    <PhoneInput label="Phone number" />

                </div>
                <div className="flex md:gap-x-4 gap-x-2 mt-8">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClick={redirectToDashboard} />
                </div>
            </form>
        </div>
    )
}

export default AddExStaffContent