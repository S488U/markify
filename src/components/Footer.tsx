const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-900/30 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr_1fr] mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-lg font-bold text-violet-300">Markify</span>
            </div>
            <p className="max-w-md text-sm text-violet-400/60">
              A markdown notes workspace with live preview, saved files, light and dark themes, and a cleaner writing flow.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-violet-200 mb-4">Workspace</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-violet-400/70 hover:text-violet-300 transition-colors">Features</a></li>
              <li><a href="#demo" className="text-violet-400/70 hover:text-violet-300 transition-colors">Workflow</a></li>
              <li><a href="/dashboard" className="text-violet-400/70 hover:text-violet-300 transition-colors">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-violet-200 mb-4">Access</h3>
            <ul className="space-y-2">
              <li><a href="/signup" className="text-violet-400/70 hover:text-violet-300 transition-colors">Create Account</a></li>
              <li><a href="/signin" className="text-violet-400/70 hover:text-violet-300 transition-colors">Sign In</a></li>
              <li><a href="/dashboard" className="text-violet-400/70 hover:text-violet-300 transition-colors">Open Dashboard</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-violet-900/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-violet-400/50 text-sm">
              © {currentYear} Markify. All rights reserved.
            </p>

            <p className="text-violet-400/50 text-sm">
              Markdown notes, live preview, and a focused writing dashboard.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
