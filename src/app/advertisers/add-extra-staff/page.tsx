import AddExStaffContent from "@/components/addExtraStaff/AddExStaffContent"
import {ADVERTISERS_DASHBOARD} from "@/utils/pages-routes";
import { ADVERTISER_EXTRA_STAFF_ADD } from "@/utils/api-urls";

const page = () => {
    return (
        <main className="page">
            <AddExStaffContent urlToDashboard={ADVERTISERS_DASHBOARD} postStaffUrl={ADVERTISER_EXTRA_STAFF_ADD} />
        </main>
    )
}

export default page