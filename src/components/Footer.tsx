import logo from "@/assets/logo.png";

const Footer = () => (
  <footer id="download" className="section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Ready to break free?
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          Join thousands reclaiming their time. Download BeyondScroll today.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Download Now
        </a>
      </div>

      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="BeyondScroll" className="w-8 h-8 rounded-lg" />
          <span className="font-heading font-bold text-sm">BeyondScroll</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2026 BeyondScroll. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
