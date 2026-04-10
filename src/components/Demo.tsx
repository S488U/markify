import Button from "./ui/Button";

const Demo = () => {
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
                      See It In Action
                    </span>
                  </h2>
                  <p className="text-violet-300/70 mb-6 leading-relaxed">
                    Experience the seamless power of Markify. Write your markdown on the left, see beautiful formatting on the right. No complicated settings, no learning curve.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {["Real-time preview", "Syntax highlighting", "Custom CSS support"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-violet-200">
                        <span className="w-5 h-5 rounded-full bg-violet-600/30 flex items-center justify-center">
                          <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button size="lg">
                    Try Live Demo
                  </Button>
                </div>

                {/* Right side - Preview */}
                <div className="relative">
                  <div className="rounded-lg border border-violet-700/30 bg-slate-950/60 p-6 overflow-hidden">
                    <div className="space-y-3">
                      <div className="h-3 bg-linear-to-r from-violet-600 to-transparent rounded-full w-32"></div>
                      <div className="h-2 bg-violet-500/20 rounded-full w-full"></div>
                      <div className="h-2 bg-violet-500/20 rounded-full w-5/6"></div>
                      <div className="h-2 bg-violet-500/20 rounded-full w-4/5"></div>

                      <div className="pt-4 space-y-2">
                        <div className="h-2 bg-violet-600/30 rounded-full w-48"></div>
                        <div className="h-2 bg-violet-500/20 rounded-full w-full"></div>
                        <div className="h-2 bg-violet-500/20 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                    ⚡ Instant
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
