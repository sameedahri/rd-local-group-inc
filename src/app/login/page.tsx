"use client";
import { useRouter } from "next/navigation";


const Login = () => {
    const router = useRouter();

    return (
        <main className="bg-loginBg flex justify-center items-start min-h-screen">
            <div className="w-[35%] h-[500px] flex items-end bg-white p-10 mt-16">
                <button 
                    className="w-[100%] h-[52px] bg-loginBg rounded-[5px] text-loginBtn font-gilroySemibold text-center text-base leading-8"
                    type="button"
                    onClick={() => router.push("/")}
                >Login</button>
            </div>
        </main>
    )
}

export default Login