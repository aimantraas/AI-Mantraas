"use client";

import { FormEvent, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess("");
    setError("");

    const emailValue = email.trim();
    const phoneValue = phone.trim();
    if (!emailRegex.test(emailValue)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phoneValue) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);
    try {
      // Determine API base URL (use environment variable or default)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue, phone: phoneValue })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSuccess("You’re on the waitlist.");
      setEmail("");
      setPhone("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="h-12 flex-1 rounded-xl border border-electric-500/40 bg-[#040c1d]/85 px-4 text-white outline-none transition focus:border-electric-400 focus:shadow-neon"
          aria-label="Email address"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Phone number"
          className="h-12 flex-1 rounded-xl border border-electric-500/40 bg-[#040c1d]/85 px-4 text-white outline-none transition focus:border-electric-400 focus:shadow-neon"
          aria-label="Phone number"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="h-12 rounded-xl border border-electric-400/60 bg-electric-500/20 px-6 font-semibold text-white transition hover:bg-electric-400/25 hover:shadow-neon active:scale-[.98]"
        >
          {loading ? "Saving..." : "Join Waitlist"}
        </button>
      </div>
      <p className="mt-3 min-h-6 text-sm text-red-300">{error}</p>
      <p className="-mt-1 min-h-6 text-sm text-emerald-300">{success}</p>
    </form>
  );
}
