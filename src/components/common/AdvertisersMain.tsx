"use client";
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";


const AdvertisersMain = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push('/advertisers/login');
    }, [router])

    return (
        <main></main>
    )
}

export default AdvertisersMain