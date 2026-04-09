import Link from "next/link";

const MarkifyLogo = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-400 via-fuchsia-500 to-violet-700 shadow-lg shadow-violet-950/50">
        <span className="text-lg font-black text-white">M</span>
      </div>
      <div>
        <div className="bg-linear-to-r from-violet-100 via-violet-200 to-fuchsia-200 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
          Markify
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-violet-300/55">
          Write beautifully
        </div>
      </div>
    </Link>
  );
};

export default MarkifyLogo;