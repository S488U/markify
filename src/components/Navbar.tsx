import Link from "next/link";
import MarkifyLogo from "./MarkifyLogo";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/src/lib/auth";

const Header = async () => {
  const user = await getUser();

  return (
    <header className="sticky top-0 z-50 border-b border-violet-900/20 bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <MarkifyLogo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-violet-300/85 transition-colors hover:text-violet-100"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm text-violet-300/85 transition-colors hover:text-violet-100"
          >
            Workflow
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium text-violet-300 transition hover:bg-violet-950 hover:text-violet-100"
              >
                Dashboard
              </Link>
              <LogoutButton className="inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-4 text-sm font-medium text-white transition hover:bg-violet-500 disabled:opacity-60" />
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium text-violet-300 transition hover:bg-violet-950 hover:text-violet-100"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-9 items-center justify-center rounded-md bg-violet-600 px-4 text-sm font-medium text-white transition hover:bg-violet-500"
              >
                Open Workspace
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
