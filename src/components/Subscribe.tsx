"use client";

import { type FormEvent, useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="bg-blue-950 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Subscribe
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-blue-200 sm:mt-4 sm:text-base">
          Stay updated with our latest news and offers.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:mt-8 sm:flex-row"
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-full border-0 px-5 py-3 text-sm text-gray-900 placeholder-gray-400 ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-blue-400 sm:text-base min-h-[44px]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 sm:px-8 sm:text-base min-h-[44px]"
          >
            Subscribe
          </button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-sm text-green-400" role="status">
            Thank you for subscribing!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400" role="alert">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
