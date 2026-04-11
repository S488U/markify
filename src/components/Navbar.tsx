import Link from "next/link";
import MarkifyLogo from "./MarkifyLogo";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/src/lib/auth";

const Header = async () => {
  const user = await getUser();

  return (
    <header className="border-b border-violet-900/30 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <MarkifyLogo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-violet-300 hover:text-violet-100 transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-violet-300 hover:text-violet-100 transition-colors"
          >
            Demo
          </a>
          <a
            href="#faq"
            className="text-violet-300 hover:text-violet-100 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="inline-flex h-9 items-center justify-center rounded-md px-3 text-xs font-medium text-violet-300 transition hover:bg-violet-950 hover:text-violet-100"
              >
                Dashboard
              </Link>
              <LogoutButton className="inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-3 text-xs font-medium text-white transition hover:bg-violet-500 disabled:opacity-60" />
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="inline-flex h-9 items-center justify-center rounded-md px-3 text-xs font-medium text-violet-300 transition hover:bg-violet-950 hover:text-violet-100"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-3 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
