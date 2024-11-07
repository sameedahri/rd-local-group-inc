"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/assets/images/login/logo.png";
import {useState, FormEvent} from "react";


const LoginCard = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const router = useRouter();
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return(
        <form onSubmit={submitForm} className="md:w-[451px] w-[360px] md:mx-0 mx-5 bg-white rounded-[12px] md:p-9 px-5 py-10">
            <div className="flex justify-center mt-4 mb-10">
                <Image src={logo} alt="Logo" width={100} height={95} />
            </div>
            <p className="text-black text-center font-gilroySemibold md:text-[32px] text-[26px] leading-9">Welcome! Just enter your Business phone number</p>
            <p className="mt-3 text-[#3F3F3F0] font-gilroyMedium text-center md:text-[16px] text-[14px]">Glad to see you, Login to your account below</p>
            <div className="mt-12 flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-[#3F3F3F] font-gilroyMedium md:text-[14px] text-[12px]">Enter your Phone number*</label>
                <input 
                    type="text" 
                    id="phoneNumber"
                    value={phoneNumber}
                    className="w-[100%] md:h-[52px] h-[43px] border border-[#DFDFDF] focus:outline-inputOutline rounded-[5px] p-3 md:placeholder:text-[14px] placeholder:text-[12px]" 
                    required={true}
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        setPhoneNumber(target.value);
                    }}
                    placeholder="+1 1234 5678 90"
                    pattern="[+]{1}[0-9]{1} [0-9]{4} [0-9]{4} [0-9]{2}"
                />
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