"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/assets/images/common/logo.png";
import {useState, FormEvent, useEffect} from "react";
import MaskedInput from "../common/MaskedInput";
import { postRequest } from "@/utils/utilFunctions";
import {jwtDecode} from "jwt-decode";


interface LoginCardProps {
    urlToDashboard: string,
    postLoginDataUrl: string,
    isOwner: boolean
}

const LoginCard:React.FC<LoginCardProps> = ({urlToDashboard, postLoginDataUrl, isOwner}) => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [data, setData] = useState<{data: {accessToken: string}, message: string, success: boolean} | string | null>(null);

    useEffect(() => {
        if(typeof data === "object" && data !== null) {
            // console.log(data.data.accessToken);
            localStorage.setItem(`${isOwner ? 'ownerAuthToken' : 'advertiserAuthToken'}`, JSON.stringify(jwtDecode(data.data.accessToken)));
            router.push(urlToDashboard);
        }
    }, [data, router, urlToDashboard, isOwner])

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postRequest(postLoginDataUrl, {phoneNumber: phoneNumber}, setData);
    };

    return(
        <form onSubmit={submitForm} className="md:w-[451px] w-[360px] md:mx-0 mx-5 bg-white rounded-[12px] md:p-9 px-5 py-10">
            <div className="flex justify-center mt-4 mb-10">
                <Image src={logo} alt="Logo" width={100} height={95} />
            </div>
            <p className="text-black text-center font-gilroySemibold md:text-[32px] text-[26px] leading-9">Welcome! Just enter your Business phone number</p>
            <p className="mt-3 text-[#3F3F3F] font-gilroyMedium text-center md:text-[16px] text-[14px]">Glad to see you, Login to your account below</p>
            <div className="mt-12 flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-[#3F3F3F] font-gilroyMedium md:text-[14px] text-[12px]">Enter your Phone number*</label>
                <MaskedInput setState={setPhoneNumber} placeholderText="+1 1234 5678 90" />
            </div>
            <button 
                className="w-[100%] md:h-[52px] h-[43px] bg-loginBg rounded-[5px] 
                    text-loginBtn font-gilroySemibold text-center md:text-[20px] text-[16px] leading-8 mt-3"
                type="submit"
            >Login</button>
        </form>
    )
}

export default LoginCard