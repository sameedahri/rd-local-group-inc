import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";
import {RESTAURANTOWNERS_DASHBOARD, RESTAURANTOWNERS_ADDREVISION} from "@/utils/pages-routes";


const page = () => {
    return (
        <main className="page">
            <CardDetailsContent 
                urlToAddRevision={RESTAURANTOWNERS_ADDREVISION}
                urlToDashboard={RESTAURANTOWNERS_DASHBOARD}
                getAttachmentsDataUrl="/posts" 
            />
        </main>
    )
}

export default page