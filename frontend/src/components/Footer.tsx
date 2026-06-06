"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/dashboard/tasks" },
    { name: "Create Task", path: "/dashboard/create" },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-6 hidden md:block">

      <h2 className="text-2xl font-bold mb-6">
        App
      </h2>

      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded ${
                pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}