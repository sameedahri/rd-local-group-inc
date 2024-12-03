import DashboardContent from "@/components/dashboard/DashboardContent";
import {RESTAURANTOWNERS_ADDEXTRASTAFF, RESTAURANTOWNERS_CARDDETAILS} from "@/utils/pages-routes";

const page = () => {
  return (
    <main className="page">
        <DashboardContent 
          urlToAddExtraStaff={RESTAURANTOWNERS_ADDEXTRASTAFF}
          urlToCardDetails={RESTAURANTOWNERS_CARDDETAILS} 
          getProofsDataUrl="/posts"
        />
    </main>
  )
}

export default page