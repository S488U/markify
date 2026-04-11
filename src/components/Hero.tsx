import Link from "next/link";
import { getUser } from "@/src/lib/auth";

const Hero = async () => {
  const user = await getUser();
  const primaryHref = user ? "/dashboard" : "/signup";
  const secondaryHref = user ? "/dashboard" : "/signin";

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-700/50 mb-6">
            <span className="inline-block w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-violet-300">
              Built for markdown notes with live preview
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-violet-200 via-violet-100 to-violet-300 bg-clip-text text-transparent">
              Write Markdown
            </span>
            <br />
            <span className="bg-linear-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent">
              Like A Real Workspace
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-violet-200/70 mb-8 max-w-2xl leading-relaxed">
            Markify is a focused notes dashboard for writing markdown, previewing
            it instantly, organizing saved files, and switching themes without
            leaving the editor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryHref}
              className="inline-flex h-11 items-center justify-center rounded-md bg-violet-600 px-8 text-base font-medium text-white transition hover:bg-violet-500"
            >
              {user ? "Open Dashboard" : "Create Workspace"}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex h-11 items-center justify-center rounded-md border border-violet-400 px-8 text-base font-medium text-violet-300 transition hover:bg-violet-950 hover:text-violet-100"
            >
              {user ? "Continue Writing" : "Sign In"}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-violet-300">
                Live
              </div>
              <p className="text-sm text-violet-400/70">Markdown preview</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-violet-300">
                Saved
              </div>
              <p className="text-sm text-violet-400/70">Notes workspace</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-violet-300">
                Light / Dark
              </div>
              <p className="text-sm text-violet-400/70">Reading modes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
