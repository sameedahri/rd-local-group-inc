"use client";
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";
import {RESTAURANTOWNERS_LOGIN} from "@/utils/pages-routes";

const RestaurantOwnersMain = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push(RESTAURANTOWNERS_LOGIN);
    }, [router])

    return (
        <main></main>
    )
}

export default RestaurantOwnersMain