const Features = () => {
  const features = [
    {
      title: "Instant Preview",
      description: "Write raw markdown on one side and read the rendered version on the other without changing screens.",
    },
    {
      title: "Saved Notes",
      description: "Create, select, update, and delete notes from the sidebar so your workspace behaves like an actual notes app.",
    },
    {
      title: "Theme Toggle",
      description: "Switch between light and dark reading modes depending on whether you want a clean document feel or a night workspace.",
    },
    {
      title: "Resizable Workspace",
      description: "Adjust the sidebar, editor, and reading view widths so the layout fits how you like to write.",
    },
    {
      title: "Code-Friendly Markdown",
      description: "Headings, lists, blockquotes, links, inline code, and fenced code blocks are rendered clearly in both themes.",
    },
    {
      title: "Focused Project Scope",
      description: "No bloated AI workflow, no fake enterprise claims, just a solid markdown notes dashboard built for your college project.",
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-violet-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-300 to-violet-100 bg-clip-text text-transparent">
              What Markify Actually Does
            </span>
          </h2>
          <p className="text-violet-300/70 text-lg max-w-2xl mx-auto">
            The landing page should match the product, so these are the core abilities the dashboard already focuses on.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-violet-800/30 bg-slate-950/40 hover:bg-slate-950/60 hover:border-violet-700/50 transition-all duration-300"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-violet-500/5 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-700/40 bg-violet-500/10">
                  <span className="block h-3.5 w-3.5 rounded-full bg-linear-to-br from-violet-200 to-violet-500"></span>
                </div>
                <h3 className="text-lg font-semibold text-violet-100 mb-2">{feature.title}</h3>
                <p className="text-violet-300/70 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
