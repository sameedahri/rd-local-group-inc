"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/assets/images/login/logo.png";


const LoginCard = () => {
    const router = useRouter();

    return(
        <div className="w-[360px] sm:w-[451px] mx-5 sm:mx-0 bg-white rounded-[12px] sm:p-9 px-5 py-10 mt-16">
            <div className="flex justify-center mt-4 mb-10">
                <Image src={logo} alt="Logo" width={100} height={95} />
            </div>
            <p className="text-black text-center font-gilroySemibold sm:text-[32px] text-[26px] leading-9">Welcome! Just enter your Business phone number</p>
            <p className="mt-3 text-[#3F3F3F0] font-gilroyMedium text-center sm:text-[16px] text-[14px]">Glad to see you, Login to your account below</p>
            <div className="mt-12 flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-[#3F3F3F] font-gilroyMedium sm:text-[14px] text-[12px]">Enter your Phone number*</label>
                <input type="tel" placeholder="+1 1234 5678 90" className="w-[100%] sm:h-[52px] h-[43px] border border-[#DFDFDF] rounded-[5px] p-3 sm:placeholder:text-[14px] placeholder:text-[12px]" />
            </div>
            <button 
                className="w-[100%] sm:h-[52px] h-[43px] bg-loginBg rounded-[5px] text-loginBtn font-gilroySemibold text-center sm:text-[20px] text-[16px] leading-8 mt-3"
                type="button"
                onClick={() => router.push("/")}
            >Login</button>
        </div>
    )

}

export default LoginCard