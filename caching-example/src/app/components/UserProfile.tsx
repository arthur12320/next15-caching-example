"use client";

import { useState } from "react";
import { updateMe, User } from "../lib/api";

export function UserProfile({ user }: { user: User }) {
  const [name, setName] = useState(user.name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateMe({ name });
  };

  return (
    <div className="mt-8 border-2 border-gray-600 margin-auto rounded-lg p-4 ">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block rounded-md border-gray-300 shadow-sm text-black"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
