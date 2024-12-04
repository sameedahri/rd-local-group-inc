import {useState} from "react";


interface UsePostResult<R> {
    data: R | null,
    loading: boolean,
    error: string | null,
    // eslint-disable-next-line
    postData: (payload: any) => Promise<void>;
}

export function usePost<T, R>(url: string): UsePostResult<R> {
    const [data, setData] = useState<R | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const postData = async (payload: T): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if(!response.ok) {
                throw new Error(`Error ${response.status} - ${response.statusText}`);
            }
            const json = await response.json();
            setData(json);
        } catch(error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return {data, loading, error, postData};
}
