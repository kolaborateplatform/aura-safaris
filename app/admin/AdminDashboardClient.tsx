"use client";

import AdminStats from "./AdminStats";

export default function AdminDashboardClient() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
      <AdminStats />
    </>
  );
} 