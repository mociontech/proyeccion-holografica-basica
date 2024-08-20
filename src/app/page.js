"use client";
import { redirect } from "next/navigation";
import useSocketConnection from "@/hooks/useSocketConnection";

export default function Home() {
  redirect("/master");
}
