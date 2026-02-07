import { motion } from "framer-motion";
import { ShieldAlert, Brain, Clock } from "lucide-react";

const reasons = [
  {
    icon: ShieldAlert,
    title: "The Doomscroll Trap",
    desc: "Social media apps are engineered to keep you scrolling infinitely. The average person spends 2.5 hours daily on mindless scrolling.",
  },
  {
    icon: Brain,
    title: "Your Brain Deserves Better",
    desc: "Doomscrolling rewires your dopamine system, reduces attention span, and increases anxiety. BeyondScroll reverses that cycle.",
  },
  {
    icon: Clock,
    title: "What Makes Us Unique",
    desc: "Unlike screen-time apps that just block you, BeyondScroll redirects your habits with smart triggers, gamification, and real accountability.",
  },
];

const WhySection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-warm-gold text-sm font-medium tracking-widest uppercase">Why BeyondScroll?</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
          Your phone shouldn't control you
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover:border-warm-gold/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-warm-gold/10 transition-colors">
              <r.icon className="w-6 h-6 text-warm-gold" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
