"use client";
import {useLayoutEffect} from "react";
import {useRouter} from "next/navigation";


const AdminMain = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push('/admin/login');
    }, [router])

    return (
        <main></main>
    )
}

export default AdminMain