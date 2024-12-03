import DashboardContent from "@/components/dashboard/DashboardContent";
import {ADVERTISERS_ADDEXTRASTAFF, ADVERTISERS_CARDDETAILS} from "@/utils/pages-routes";


const page = () => {
  return (
    <main className="page">
        <DashboardContent 
          urlToAddExtraStaff={ADVERTISERS_ADDEXTRASTAFF}
          urlToCardDetails={ADVERTISERS_CARDDETAILS}
          getProofsDataUrl="/posts"
        />
    </main>
  )
}

export default page