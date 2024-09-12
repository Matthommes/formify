"use client";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Login successful:", data.message);
        // Redirect or perform other actions after successful login
      } else {
        console.log("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className=" w-full px-4 lg:w-1/2">
        <h1 className="text-3xl font-bold text-left mb-6 text-gray-800">
          Admin Login
        </h1>
        <form
          action=""
          method="post"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 text-base rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 text-base rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <Button className=" w-full">Login</Button>
        </form>
      </div>
    </main>
  );
}
