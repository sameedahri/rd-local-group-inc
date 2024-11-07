import {useState, useEffect} from "react";
import { API_URL } from "./constants";


interface UseFetchResult<T> {
    data: T | null,
    loading: boolean,
    error: string | null
}

export function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try{
                const response = await fetch(API_URL + url, {method: "GET"});
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
        
        fetchData();
    }, [url])

    return {data, loading, error}
}