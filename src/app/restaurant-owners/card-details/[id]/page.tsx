import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";
import {RESTAURANTOWNERS_DASHBOARD, RESTAURANTOWNERS_ADDREVISION} from "@/utils/pages-routes";
import {OWNER_PROOF_GET} from "@/utils/api-urls";

const page = () => {
    return (
        <main className="page">
            <CardDetailsContent 
                urlToAddRevision={RESTAURANTOWNERS_ADDREVISION}
                urlToDashboard={RESTAURANTOWNERS_DASHBOARD}
                getProofDetailUrl={OWNER_PROOF_GET}
            />
        </main>
    )
}

export default page