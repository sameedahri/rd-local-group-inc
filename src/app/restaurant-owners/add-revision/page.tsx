import AddRevisionContent from "@/components/addRevision/AddRevisionContent";
import {RESTAURANTOWNERS_DASHBOARD} from "@/utils/pages-routes";


const page = () => {
    return (
        <main className="page">
            <AddRevisionContent urlToDashboard={RESTAURANTOWNERS_DASHBOARD} />
        </main>
    )
}

export default page