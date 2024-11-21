"use client";
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";


const RestaurantOwnersMain = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push('/restaurant-owners/login');
    }, [router])

    return (
        <main></main>
    )
}

export default RestaurantOwnersMain