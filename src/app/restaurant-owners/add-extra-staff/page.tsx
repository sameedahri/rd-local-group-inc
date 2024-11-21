import AddExStaffContent from "@/components/addExtraStaff/AddExStaffContent"


const page = () => {
    return (
        <main className="page">
            <AddExStaffContent urlToDashboard="/restaurant-owners/dashboard" />
        </main>
    )
}

export default page