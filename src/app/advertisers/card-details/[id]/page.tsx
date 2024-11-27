import CardDetailsContent from "@/components/cardDetails/CardDetailsContent";


const page = () => {
    return (
        <main className="page">
            <CardDetailsContent 
                urlToAddRevision="/advertisers/add-revision" 
                urlToDashboard="/advertisers/dashboard" 
                getAttachmentsDataUrl="/posts"
            />
        </main>
    )
}

export default page