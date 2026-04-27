"use client";

import { useSearchParams } from "next/navigation";
import Dashboard from "../components/Dashboard";

export default function Page() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const course = searchParams.get("course") || "";

  return (
    <Dashboard 
      name={name}
      email={email}
      course={course}
    />
  );
}