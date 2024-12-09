import { useEffect } from "react"

// eslint-disable-next-line
const useRedirect = (data: any, callbackFunction: () => void) => {
    useEffect(() => {
        if(typeof data === "object" && data !== null) {
            callbackFunction();
        }
    }, [data, callbackFunction])
}

export default useRedirect