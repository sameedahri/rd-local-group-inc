import DashboardContent from "@/components/dashboard/DashboardContent";
import {ADVERTISERS_ADDEXTRASTAFF, ADVERTISERS_CARDDETAILS} from "@/utils/pages-routes";
import { ADVERTISER_PROOFS_GET } from "@/utils/api-urls";

const page = () => {
  return (
    <main className="page">
        <DashboardContent 
          urlToAddExtraStaff={ADVERTISERS_ADDEXTRASTAFF}
          urlToCardDetails={ADVERTISERS_CARDDETAILS}
          getProofsDataUrl={ADVERTISER_PROOFS_GET}
        />
    </main>
  )
}

export default page