import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login"
};

const layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>{children}</>
    )
}

export default layout