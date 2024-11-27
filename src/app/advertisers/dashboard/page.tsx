import DashboardContent from "@/components/dashboard/DashboardContent";


const page = () => {
  return (
    <main className="page">
        <DashboardContent 
          urlToAddExtraStaff="/advertisers/add-extra-staff" 
          urlToCardDetails="/advertisers/card-details"
          getProofsDataUrl="/posts"
        />
    </main>
  )
}

export default page