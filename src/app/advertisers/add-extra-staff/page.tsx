import AddExStaffContent from "@/components/addExtraStaff/AddExStaffContent"
import {ADVERTISERS_DASHBOARD} from "@/utils/pages-routes";


const page = () => {
    return (
        <main className="page">
            <AddExStaffContent urlToDashboard={ADVERTISERS_DASHBOARD} />
        </main>
    )
}

export default page