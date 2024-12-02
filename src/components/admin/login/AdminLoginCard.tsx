"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/assets/images/common/logo.png";
import {useState, FormEvent} from "react";
import {usePost} from "@/utils/usePost";


const AdminLoginCard = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const {postData, data} = usePost("/posts");
    console.log(data)

    const router = useRouter();
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postData({
            username: username,
            password: password
        });
        router.push("/admin/user/admin-list");
    };

    return (
        <form onSubmit={submitForm} className="md:w-[451px] w-[360px] md:mx-0 mx-5 bg-white rounded-[12px] md:p-9 px-5 py-10">
            <div className="flex justify-center mt-4 mb-10">
                <Image src={logo} alt="Logo" width={100} height={95} />
            </div>
            <p className="text-black text-center font-inikaRegular md:text-[42px] text-[26px] leading-9">Welcome</p>
            <p className="mt-3 text-[#3F3F3F] font-gilroyMedium text-center md:text-[16px] text-[14px]">Glad to see you, Login to your account below</p>
            {/* user name */}
            <div className="flex flex-col gap-1 mt-12">
                <label htmlFor="username" className="text-[#3F3F3F] font-gilroyMedium md:text-[16px] text-[12px]">User name</label>
                <input 
                    type="email"
                    id="username"
                    value={username}
                    className="w-[100%] md:h-[52px] h-[43px] border border-[#DFDFDF] focus:outline-inputOutline rounded-[5px] p-3 md:placeholder:text-[14px] placeholder:text-[12px] placeholder:text-[#D8D8D8]" 
                    required={true}
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        setUsername(target.value);
                    }}
                    placeholder="Enter email/Phone number (+1 1234 5678 90)"
                    autoComplete="off"
                />
            </div>
            {/* password */}
            <div className="flex flex-col gap-1 mt-3.5 relative">
                <label htmlFor="password" className="text-[#3F3F3F] font-gilroyMedium md:text-[16px] text-[12px]">Password</label>
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