const Features = () => {
  const features = [
    {
      icon: "✨",
      title: "Instant Rendering",
      description: "Experience lightning-fast markdown rendering with real-time preview and zero latency.",
    },
    {
      icon: "🎨",
      title: "Customizable Themes",
      description: "Choose from multiple beautiful themes or create your own custom color schemes.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "All rendering happens client-side. Your content never touches our servers.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Perfect experience on desktop, tablet, and mobile devices with adaptive layouts.",
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Optimized for speed with advanced caching and intelligent code splitting.",
    },
    {
      icon: "🧩",
      title: "Easy Integration",
      description: "Simple API and comprehensive documentation for seamless integration into any project.",
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
              Powerful Features
            </span>
          </h2>
          <p className="text-violet-300/70 text-lg max-w-2xl mx-auto">
            Everything you need to render beautiful markdown with ease and elegance.
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
                <div className="text-4xl mb-3">{feature.icon}</div>
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
