"use client";
import {useRouter} from "next/navigation";
import { useLayoutEffect } from "react";


export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push('/login')
  }, [router])

  return (
    <main className="min-h-screen"></main>
  );
}
