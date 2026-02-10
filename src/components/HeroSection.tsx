import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block text-warm-gold font-medium text-sm tracking-widest uppercase mb-6">
          Take back your time
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">
          Stop Scrolling.
          <br />
          <span className="text-gradient">Start Living.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
          Tired of being addicted to your phone? You can now breakfree.
          BeyondScroll helps you redirect to productive tasks, maintains your
          streak and holds you accountable among your chosen community. With
          BeyondScroll, smartphone addiction is now a solved problem.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#download"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="border border-border text-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-semibold">2,000+</span> users reclaiming their time
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="animate-float">
          <img
            src={heroImg}
            alt="Break free from doomscrolling"
            className="w-full rounded-3xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
