"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { getDashboard } from "@/src/services/auth.service";

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 protect route
    if (!token) {
      router.push("/login");
      return;
    }

    const loadDashboard = async () => {
      const res = await getDashboard();

      if (res.success) {
        setData(res.data);
      }

      setLoading(false);
    };

    loadDashboard();
  }, []);

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Total */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Tasks</h2>
         <p className="text-2xl font-bold">{data?.total || 0}</p>
        </div>

        {/* Completed */}
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-gray-600">Completed</h2>
          <p className="text-2xl font-bold text-green-700">
            {data?.completed || 0}
          </p>
        </div>

        {/* Pending */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h2 className="text-gray-600">Pending</h2>
          <p className="text-2xl font-bold text-yellow-700">
            {data?.pending || 0}
          </p>
        </div>

        {/* In Progress */}
        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h2 className="text-gray-600">In Progress</h2>
          <p className="text-2xl font-bold text-blue-700">
            {data?.inProgress || 0}
          </p>
        </div>

      </div>

    </div>
  );
}