import DashboardContent from "@/components/dashboard/DashboardContent";


const page = () => {
  return (
    <main className="page">
        <DashboardContent 
          urlToAddExtraStaff="/restaurant-owners/add-extra-staff" 
          urlToCardDetails="/restaurant-owners/card-details" 
          getProofsDataUrl="/posts"
        />
    </main>
  )
}

export default page