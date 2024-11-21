import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";


const page = () => {
    return (
        <main className="page">
            <CardDetailsContent urlToAddRevision="/advertisers/add-revision" urlToDashboard="/advertisers/dashboard" />
        </main>
    )
}

export default page