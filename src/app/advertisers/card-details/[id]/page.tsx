import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";
import {ADVERTISERS_ADDREVISION, ADVERTISERS_DASHBOARD} from "@/utils/pages-routes";
import { ADVERTISER_PROOF_GET } from "@/utils/api-urls";

const page = () => {
    return (
        <main className="page">
            <CardDetailsContent 
                urlToAddRevision={ADVERTISERS_ADDREVISION}
                urlToDashboard={ADVERTISERS_DASHBOARD} 
                getProofDetailUrl={ADVERTISER_PROOF_GET}
            />
        </main>
    )
}

export default page