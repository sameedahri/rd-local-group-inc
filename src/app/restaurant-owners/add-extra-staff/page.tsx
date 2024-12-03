import AddExStaffContent from "@/components/addExtraStaff/AddExStaffContent"
import {RESTAURANTOWNERS_DASHBOARD} from "@/utils/pages-routes";


const page = () => {
    return (
        <main className="page">
            <AddExStaffContent urlToDashboard={RESTAURANTOWNERS_DASHBOARD} />
        </main>
    )
}

export default page