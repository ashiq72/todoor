"use client";

import { useEffect, useState } from "react";
import { getTasks } from "../../../services/task.service";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await getTasks();

        if (res?.success) {
          setTasks(res.data);
        }
      } catch (err) {
        console.error("Task fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  if (loading) return <p className="p-10">Loading tasks...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-6">Tasks</h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Description</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task._id} className="border-t">

                <td className="p-4 font-medium">
                  {task.title}
                </td>

                <td className="p-4 text-gray-600">
                  {task.description}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : task.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}