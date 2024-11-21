import AddExStaffContent from "@/components/addExtraStaff/AddExStaffContent"


const page = () => {
    return (
        <main className="page">
            <AddExStaffContent urlToDashboard="/advertisers/dashboard" />
        </main>
    )
}

export default page