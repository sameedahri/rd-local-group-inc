import Header from "@/components/common/Header";


const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header isAdmin={true} />
            {children}
        </>
    )
}

export default layout