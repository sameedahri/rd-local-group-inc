import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";


const page = () => {
    return (
        <main className="page">
            <CardDetailsContent urlToAddRevision="/restaurant-owners/add-revision" urlToDashboard="/restaurant-owners/dashboard" />
        </main>
    )
}

export default page