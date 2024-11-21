import LoginCard from "@/components/login/LoginCard";


const page = () => {
    return (
        <main className="bg-loginBg flex justify-center items-center min-h-screen">
           <LoginCard urlToDashboard="/restaurant-owners/dashboard" />
        </main>
    )
}

export default page