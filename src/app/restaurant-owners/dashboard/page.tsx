import DashboardContent from "@/components/dashboard/DashboardContent";


const page = () => {
  return (
    <main className="page">
        <DashboardContent urlToAddExtraStaff="/restaurant-owners/add-extra-staff" urlToCardDetails="/restaurant-owners/card-details" />
    </main>
  )
}

export default page