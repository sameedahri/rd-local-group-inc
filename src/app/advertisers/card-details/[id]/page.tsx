import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";
import {ADVERTISERS_ADDREVISION, ADVERTISERS_DASHBOARD} from "@/utils/pages-routes";


const page = () => {
    return (
        <main className="page">
            <CardDetailsContent 
                urlToAddRevision={ADVERTISERS_ADDREVISION}
                urlToDashboard={ADVERTISERS_DASHBOARD} 
                getAttachmentsDataUrl="/posts"
            />
        </main>
    )
}

export default page