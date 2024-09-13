"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center p-8 h-[70vh] text-zinc-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Formify</h1>
        <p className="text-lg mb-8">
          Effortlessly create and share forms with Formify. Simplify data
          collection and streamline responses with ease.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Button className="text-white">
            <Link href="/register">Sign Up</Link>
          </Button>
          <Button variant="outline">
            <Link href="/learn">Learn more</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
