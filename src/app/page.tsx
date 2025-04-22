"use client";
import {useRouter} from "next/navigation";
import { useLayoutEffect } from "react";
import { RESTAURANTOWNERS_LOGIN } from "@/utils/pages-routes";

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push(RESTAURANTOWNERS_LOGIN);
  }, [router])

  return (
    <main></main>
  );
}
