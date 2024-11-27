import { MutableRefObject } from "react";

export const validationMessage = (id: string, timeoutRef: MutableRefObject<NodeJS.Timeout | null>, hideOnly:boolean) => {
    const validationDiv = document.querySelector(id);
    if(hideOnly) {
        validationDiv?.classList.remove("opacity-1");
        validationDiv?.classList.add("opacity-0");
        return;
    }
    validationDiv?.classList.remove("opacity-0");
    validationDiv?.classList.add("opacity-1");
    if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(function() {
        validationDiv?.classList.remove("opacity-1");
        validationDiv?.classList.add("opacity-0");
    }, 10000);
}