import AddRevisionContent from "@/components/addRevision/AddRevisionContent";
import {ADVERTISERS_DASHBOARD} from "@/utils/pages-routes";
import { ADVERTISER_REVISION_ADD } from "@/utils/api-urls";

const page = () => {
    return (
        <main className="page">
            <AddRevisionContent urlToDashboard={ADVERTISERS_DASHBOARD} postRevisionUrl={ADVERTISER_REVISION_ADD} />
        </main>
    )
}

export default page