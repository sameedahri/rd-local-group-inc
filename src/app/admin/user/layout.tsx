import Header from "@/components/common/Header";
import Sidemenu from "@/components/admin/adminCommon/Sidemenu";


const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header isAdmin={true} urlToLogin="" />
            <Sidemenu />
            {children}
        </>
    )
}

export default layout