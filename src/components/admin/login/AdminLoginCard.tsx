"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/assets/images/common/logo.png";
import {useState, FormEvent, useEffect} from "react";
import {ADMIN_USER_ADMINLIST} from "@/utils/pages-routes";
import {ADMIN_LOGIN} from "@/utils/api-urls";
import {postRequest} from "@/utils/utilFunctions";
import {jwtDecode} from "jwt-decode";


const AdminLoginCard = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [data, setData] = useState<{data: {accessToken: string}, message: string, success: boolean} | string | null>(null);

    useEffect(() => {
        if(typeof data === "object" && data !== null) {
            localStorage.setItem('adminAuthToken', JSON.stringify(data.data.accessToken));
            localStorage.setItem('adminUserInfo', JSON.stringify(jwtDecode(data.data.accessToken)));
            router.push(ADMIN_USER_ADMINLIST);
        }
    }, [data, router])

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postRequest(ADMIN_LOGIN, {email: email, password: password}, setData);
    };

    return (
        <form onSubmit={submitForm} className="md:w-[451px] w-[360px] md:mx-0 mx-5 bg-white rounded-[12px] md:p-9 px-5 py-10">
            <div className="flex justify-center mt-4 mb-10">
                <Image src={logo} alt="Logo" width={100} height={95} />
            </div>
            <p className="text-black text-center font-inikaRegular md:text-[42px] text-[26px] leading-9">Welcome</p>
            <p className="mt-3 text-[#3F3F3F] font-gilroyMedium text-center md:text-[16px] text-[14px]">Glad to see you, Login to your account below</p>
            {/* email */}
            <div className="flex flex-col gap-1 mt-12">
                <label htmlFor="email" className="text-[#3F3F3F] font-gilroyMedium md:text-[16px] text-[12px]">Email*</label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    className="w-[100%] md:h-[52px] h-[43px] border border-[#DFDFDF] focus:outline-inputOutline rounded-[5px] p-3 md:placeholder:text-[14px] placeholder:text-[12px] placeholder:text-[#D8D8D8]" 
                    required={true}
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        setEmail(target.value);
                    }}
                    placeholder="Enter email"
                    autoComplete="off"
                />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1 mt-3.5 relative">
                <label htmlFor="password" className="text-[#3F3F3F] font-gilroyMedium md:text-[16px] text-[12px]">Password*</label>
                <input
                type="password" 
                id="password"
                value={password}
                className="w-[100%] md:h-[52px] h-[43px] border border-[#DFDFDF] focus:outline-inputOutline rounded-[5px] p-3 md:placeholder:text-[14px] placeholder:text-[12px] placeholder:text-[#D8D8D8]" 
                required={true}
                onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setPassword(target.value);
                }}
                placeholder="Password"
            />
            </div>
            <button 
                className="w-[100%] md:h-[52px] h-[43px] bg-[#F3DCD6] rounded-[5px] 
                    text-loginBtn font-inikaRegular text-center md:text-[20px] text-[16px] leading-8 mt-5"
                type="submit"
            >Login</button>
        </form>
    )
}

export default AdminLoginCard