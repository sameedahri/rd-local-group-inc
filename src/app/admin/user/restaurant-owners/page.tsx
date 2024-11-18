import RestaurantOwnersContent from "@/components/admin/user/restaurantOwners/RestaurantOwnersContent"


const page = () => {
  return (
    <div className="flex overflow-x-hidden">
        <main className="sidemenu-page">
            <RestaurantOwnersContent />
        </main>
    </div>
  )
}

export default page