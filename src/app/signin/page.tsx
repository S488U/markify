import Link from "next/link";

const SigninPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-violet-950/60 backdrop-blur-xl border border-violet-800 rounded-2xl p-8 shadow-2xl shadow-violet-950/50">
          
          {/* Title */}
          <h2 className="text-3xl font-bold text-violet-200 mb-2">
            Welcome Back
          </h2>
          <p className="text-violet-400/70 mb-6 text-sm">
            Sign in to continue your journey ✨
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-violet-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
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
                className="w-full rounded-md bg-violet-900/50 border border-violet-700 px-4 py-2 text-violet-100 placeholder-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-11 rounded-md bg-violet-600 text-white font-medium transition hover:bg-violet-500"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-violet-400/70 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-violet-300 hover:text-violet-100 underline underline-offset-4"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;