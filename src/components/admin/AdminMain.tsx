"use client";
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";
import {ADMIN_LOGIN} from "@/utils/pages-routes";

const AdminMain = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push(ADMIN_LOGIN);
    }, [router])

    return (
        <main></main>
    )
}

export default AdminMain