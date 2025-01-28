import AddRevisionContent from "@/components/addRevision/AddRevisionContent";
import {RESTAURANTOWNERS_DASHBOARD} from "@/utils/pages-routes";
import { OWNER_REVISION_ADD } from "@/utils/api-urls";

const page = () => {
    return (
        <main className="page">
            <AddRevisionContent urlToDashboard={RESTAURANTOWNERS_DASHBOARD} postRevisionUrl={OWNER_REVISION_ADD} />
        </main>
    )
}

export default page