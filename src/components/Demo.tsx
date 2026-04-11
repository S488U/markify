import Link from "next/link";
import { getUser } from "@/src/lib/auth";

const Demo = async () => {
  const user = await getUser();

  return (
    <section id="demo" className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-violet-900/20 to-violet-600/20 blur-xl"></div>

          {/* Card */}
          <div className="relative p-8 md:p-12 rounded-2xl border border-violet-800/30 bg-linear-to-br from-slate-950/80 to-slate-900/80 backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-600/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-linear-to-r from-violet-300 to-violet-100 bg-clip-text text-transparent">
                      From Draft To Reading View
                    </span>
                  </h2>
                  <p className="text-violet-300/70 mb-6 leading-relaxed">
                    The workflow is simple: pick a note from the sidebar, write markdown in the editor, and watch the rendered note update in real time.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {["Select notes from the sidebar", "Write markdown in the editor", "Read the formatted note instantly"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-violet-200">
                        <span className="w-5 h-5 rounded-full bg-violet-600/30 flex items-center justify-center">
                          <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={user ? "/dashboard" : "/signup"}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-violet-600 px-6 text-base font-medium text-white transition hover:bg-violet-500"
                  >
                    {user ? "Go To Dashboard" : "Start Writing"}
                  </Link>
                </div>

                {/* Right side - Preview */}
                <div className="relative">
                  <div className="rounded-lg border border-violet-700/30 bg-slate-950/60 p-6 overflow-hidden">
                    <div className="space-y-4 text-sm text-violet-100/90">
                      <div className="rounded-md border border-violet-700/30 bg-slate-900/80 p-3 font-mono text-violet-200/90">
                        # Lecture Notes
                      </div>
                      <div className="space-y-2 rounded-md border border-violet-700/20 bg-slate-900/40 p-4">
                        <div className="h-3 w-32 rounded-full bg-violet-400/60"></div>
                        <div className="h-2 w-full rounded-full bg-violet-500/20"></div>
                        <div className="h-2 w-5/6 rounded-full bg-violet-500/20"></div>
                        <div className="h-2 w-2/3 rounded-full bg-violet-500/20"></div>
                      </div>
                      <div className="rounded-md border border-violet-700/20 bg-slate-900/60 p-4 font-mono text-cyan-300">
                        console.log(&quot;markdown preview&quot;);
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                    Live preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
