import Link from "next/link";
import { getUser } from "@/src/lib/auth";

const CTA = async () => {
  const user = await getUser();

  return (
    <section className="relative py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-96 bg-linear-to-r from-violet-600/20 to-violet-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mx-auto px-6 md:px-12 py-16 rounded-2xl border border-violet-700/50 bg-linear-to-br from-violet-950/40 to-slate-950/40 backdrop-blur-sm text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-300 via-violet-200 to-violet-300 bg-clip-text text-transparent">
              Open The Notes Workspace
            </span>
          </h2>

          <p className="text-violet-300/70 text-lg mb-8 max-w-2xl mx-auto">
            The product is the dashboard. Create an account if you need one, or jump straight back into your notes workspace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={user ? "/dashboard" : "/signup"}
              className="inline-flex h-11 items-center justify-center rounded-md bg-violet-600 px-8 text-base font-medium text-white transition hover:bg-violet-500"
            >
              {user ? "Open Dashboard" : "Create Account"}
            </Link>
            <Link
              href={user ? "/dashboard" : "/signin"}
              className="inline-flex h-11 items-center justify-center rounded-md border border-violet-400 px-8 text-base font-medium text-violet-300 transition hover:bg-violet-950 hover:text-violet-100"
            >
              {user ? "Keep Writing" : "Sign In"}
            </Link>
          </div>

          <p className="text-violet-400/50 text-sm mt-6">
            Built around markdown editing, live preview, and saved notes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
