import { useLayoutEffect } from "react";


const useShowMenuIcon = () => {
    useLayoutEffect(() => {
        if(window.matchMedia("(max-width: 1023px)").matches) {
            document.querySelector('#menuIcon')?.classList.remove('hidden');
        }
    }, [])
}

export default useShowMenuIcon