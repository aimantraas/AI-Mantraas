"use client";

import { FormEvent, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9()+\-\s]{7,20}$/;

export function WaitlistForm() {
  const [form, setForm] = useState({ name: "", company: "", industry: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim() || !form.company.trim() || !form.industry.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("All fields are required.");
      return;
    }
    if (!emailRegex.test(form.email.trim())) {
      setError("Enter a valid business email.");
      return;
    }
    if (!phoneRegex.test(form.phone.trim())) {
      setError("Enter a valid phone number.");
      return;
    }

    setLoading(true);
    try {
      // Determine API base URL (use environment variable or default)
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSuccess("Application received. We’ll reach out soon.");
      setForm({ name: "", company: "", industry: "", email: "", phone: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "h-11 w-full rounded-xl border border-electric-500/35 bg-[#0a1326]/85 px-4 text-sm text-white outline-none transition focus:border-electric-400 focus:shadow-neon placeholder:text-slate-400";

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-3 rounded-2xl border border-electric-500/25 bg-black/30 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Name"
          value={form.name}
          onChange={(e) => handleChange("name")(e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Company Name"
          value={form.company}
          onChange={(e) => handleChange("company")(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Industry"
          value={form.industry}
          onChange={(e) => handleChange("industry")(e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Business Email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email")(e.target.value)}
          required
        />
      </div>
      <input
        className={inputClass}
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => handleChange("phone")(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="relative inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-xl text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-[1px] focus:outline-none disabled:cursor-not-allowed disabled:opacity-80"
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400 opacity-90 blur-lg" />
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-500 via-sky-500 to-electric-400" />
        <span className="relative">{loading ? "Submitting..." : "Join the Waitlist →"}</span>
      </button>
      <p className="min-h-5 text-sm text-red-300">{error}</p>
      <p className="min-h-5 text-sm text-emerald-300">{success}</p>
      <p className="text-[12px] text-slate-400">
        We review every application manually. Enterprise companies only.
      </p>
    </form>
  );
}
