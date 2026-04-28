"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Dashboard from "../components/Dashboard";

function DashboardContent() {
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

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}