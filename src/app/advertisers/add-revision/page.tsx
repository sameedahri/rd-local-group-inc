import AddRevisionContent from "@/components/addRevision/AddRevisionContent";
import {ADVERTISERS_DASHBOARD} from "@/utils/pages-routes";


const page = () => {
    return (
        <main className="page">
            <AddRevisionContent urlToDashboard={ADVERTISERS_DASHBOARD} />
        </main>
    )
}

export default page