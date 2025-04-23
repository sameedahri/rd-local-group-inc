"use client";
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";
import {ADVERTISERS_LOGIN} from "@/utils/pages-routes"

const AdvertisersMain = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push(ADVERTISERS_LOGIN);
    }, [router])

    return (
        <main></main>
    )
}

export default AdvertisersMain