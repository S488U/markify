"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormProps = {
  signin?: boolean;
};

const Form = ({ signin = false }: FormProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const config = signin
    ? {
        heading: "Welcome Back",
        desc: "Sign in to continue your journey ✨",
        footer: "Don’t have an account?",
        buttonText: "Sign In",
        link: {
          linkText: "Create one",
          url: "/signup",
        },
        endpoint: "http://localhost:3000/api/auth/login",
      }
    : {
        heading: "Create Account",
        desc: "Start your journey with beautiful markdown ✨",
        footer: "Already have an account?",
        buttonText: "Create Account",
        link: {
          linkText: "Sign in",
          url: "/signin",
        },
        endpoint: "http://localhost:3000/api/auth/signup",
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const body = signin
        ? { email, password }
        : { username, email, password };

      const res = await fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Something went wrong");
        setError(true);
        return;
      }

      setMessage(data.message || "Success 🎉");
      setError(false);

      // small delay so user sees message
      setTimeout(() => {
        router.push(signin ? "/dashboard" : "/signin");
      }, 1200);
    } catch (err) {
      console.error(err);
      setMessage("Network error");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-violet-950/60 backdrop-blur-xl border border-violet-800 rounded-2xl p-8 shadow-2xl shadow-violet-950/50">
      {/* Title */}
      <h2 className="text-3xl font-bold text-violet-200 mb-2">
        {config.heading}
      </h2>

      <p className="text-violet-400/70 mb-6 text-sm">{config.desc}</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        {!signin && (
          <div>
            <label className="block text-sm text-violet-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md bg-violet-900/50 border border-violet-700 px-4 py-2 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm text-violet-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-violet-900/50 border border-violet-700 px-4 py-2 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-violet-300 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-violet-900/50 border border-violet-700 px-4 py-2 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-md bg-violet-600 text-white font-medium transition hover:bg-violet-500 disabled:opacity-50"
        >
          {loading ? "Please wait..." : config.buttonText}
        </button>

        {/* 🔥 Message UI */}
        {message && (
          <p
            className={`text-sm text-center mt-2 ${
              error ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>

      {/* Footer */}
      <p className="text-sm text-violet-400/70 mt-6 text-center">
        {config.footer}{" "}
        <Link
          href={config.link.url}
          className="text-violet-300 hover:text-violet-100 underline underline-offset-4"
        >
          {config.link.linkText}
        </Link>
      </p>
    </div>
  );
};

export default Form;