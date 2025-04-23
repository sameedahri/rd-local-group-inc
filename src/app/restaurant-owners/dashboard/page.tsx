import DashboardContent from "@/components/dashboard/DashboardContent";
import {RESTAURANTOWNERS_ADDEXTRASTAFF, RESTAURANTOWNERS_CARDDETAILS} from "@/utils/pages-routes";
import { OWNER_PROOFS_GET } from "@/utils/api-urls";

const page = () => {

  return (
    <main className="page">
        <DashboardContent 
          urlToAddExtraStaff={RESTAURANTOWNERS_ADDEXTRASTAFF}
          urlToCardDetails={RESTAURANTOWNERS_CARDDETAILS} 
          getProofsDataUrl={OWNER_PROOFS_GET}
        />
    </main>
  )
}

export default page