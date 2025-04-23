import { MutableRefObject, Dispatch, SetStateAction } from "react";

// eslint-disable-next-line
export const postRequest = (url: string, postData: any, setState?: Dispatch<SetStateAction<any>> | null, isFormData: boolean = false, isAdmin: boolean = true) => {
    let authToken = null;
    if(isAdmin) {
        authToken = localStorage.getItem('adminAuthToken')
    } else {
        authToken = localStorage.getItem('userAuthToken')
    }
    const _postData = isFormData ? postData : JSON.stringify(postData);
    const _contentType = isFormData ? 'multi' : 'application/json';
    fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-type': _contentType
        },
        body: _postData
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
export const postFormData = (url: string, postData: any, setState?: Dispatch<SetStateAction<any>>) => {
    const authToken = localStorage.getItem('adminAuthToken');
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
        body: postData
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
export const getRequest = (url: any, setState?: Dispatch<SetStateAction<any>>, setLoading?: Dispatch<SetStateAction<boolean>>, isAdmin: boolean = true) => {
    if(setLoading) setLoading(true);
    let authToken = null;
    if(isAdmin) {
        authToken = localStorage.getItem('adminAuthToken')
    } else {
        authToken = localStorage.getItem('userAuthToken')
    }
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`
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

// eslint-disable-next-line
export const deleteRequest = (url: string, setState?: Dispatch<SetStateAction<any>> | null, isAdmin: boolean = true) => {
    let authToken = null;
    if(isAdmin) {
        authToken = localStorage.getItem('adminAuthToken')
    } else {
        authToken = localStorage.getItem('userAuthToken')
    }
    fetch(url, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-type': 'application/json'
        },
        body: null
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