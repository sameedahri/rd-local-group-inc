import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_LOGIN } from "./pages-routes";

function useIsAuthenticated(isAdmin: boolean) {
    const router = useRouter();
    useLayoutEffect(() => {
        if(isAdmin) {
            const authToken = localStorage.getItem('adminAuthToken');
            if(authToken === null) router.push(ADMIN_LOGIN);
        } else {
            // do nothing for now
        }
    }, [router, isAdmin])
}

export default useIsAuthenticated