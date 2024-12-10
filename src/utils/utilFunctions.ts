import { MutableRefObject, Dispatch, SetStateAction } from "react";


// eslint-disable-next-line
export const postRequest = (url: string, postData: any, setState?: Dispatch<SetStateAction<any>>) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => {
            if (!res.ok) {
                throw Error(`Error ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            if(setState) setState(data)
        })
        .catch(error => {
            if(setState) setState(error.message)
        })
}

// eslint-disable-next-line
export const getRequest = (url: any, setState?: Dispatch<SetStateAction<any>>, setLoading?: Dispatch<SetStateAction<boolean>>) => {
    if(setLoading) setLoading(true);
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzM4MjI3MzEsImV4cCI6MTczMzkwOTEzMX0.06xUkLj_ri74QOZqf2ZPr_VJemnQM7w2-ypKnqha7DM'}`
        }
    })
        .then(res => {
            if (!res.ok) {
                throw Error(`Error ${res.status} - ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            if(setState) setState(data);
            if(setLoading) setLoading(false);
        })
        .catch(error => {
            if(setState) setState(error.message);
            if(setLoading) setLoading(false);
        })
}

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