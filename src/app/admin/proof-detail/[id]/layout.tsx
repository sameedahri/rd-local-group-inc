import Header from "@/components/common/Header";


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header urlToLogin="" isAdmin={true} />
        {children}
    </>
  )
}

export default layout