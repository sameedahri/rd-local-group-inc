import AddExStaffContent from "@/components/addExtraStaff/AddExStaffContent"
import {RESTAURANTOWNERS_DASHBOARD} from "@/utils/pages-routes";
import { OWNER_EXTRA_STAFF_ADD } from "@/utils/api-urls";

const page = () => {
    return (
        <main className="page">
            <AddExStaffContent urlToDashboard={RESTAURANTOWNERS_DASHBOARD} postStaffUrl={OWNER_EXTRA_STAFF_ADD} />
        </main>
    )
}

export default page