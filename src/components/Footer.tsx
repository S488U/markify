const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-900/30 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-lg font-bold text-violet-300">Markify</span>
            </div>
            <p className="text-violet-400/60 text-sm">Beautiful markdown rendering for everyone.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-violet-200 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Features</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-violet-200 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">About</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Blog</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-violet-200 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Terms</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Security</a></li>
              <li><a href="#" className="text-violet-400/70 hover:text-violet-300 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-violet-900/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-violet-400/50 text-sm">
              © {currentYear} Markify. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {["Twitter", "GitHub", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-violet-700/30 flex items-center justify-center text-violet-400/70 hover:text-violet-300 hover:border-violet-600/50 transition-colors"
                >
                  <span className="text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;