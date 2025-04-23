import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_LOGIN, RESTAURANTOWNERS_LOGIN, ADVERTISERS_LOGIN } from "./pages-routes";

function useIsAuthenticated(isAdmin: boolean, isOwner: boolean) {
    const router = useRouter();
    useLayoutEffect(() => {
        if(isAdmin) {
            const authToken = localStorage.getItem('adminAuthToken');
            if(authToken === null) router.push(ADMIN_LOGIN);
        } else {
            const userAuthToken = localStorage.getItem('userAuthToken');
            if(userAuthToken === null) router.push(isOwner ? RESTAURANTOWNERS_LOGIN : ADVERTISERS_LOGIN); 
        }
    }, [router, isAdmin, isOwner])
}

export default useIsAuthenticated