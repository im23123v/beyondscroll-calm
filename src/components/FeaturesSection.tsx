import { motion } from "framer-motion";
import { Flame, Trophy, Lock, Zap, Bell, Target } from "lucide-react";

const features = [
  { icon: Flame, title: "Daily Streaks", desc: "Build momentum with streak tracking. Stay consistent and watch your screen-free days grow." },
  { icon: Trophy, title: "Leaderboard", desc: "Compete with friends and the community. See who can stay focused the longest." },
  { icon: Lock, title: "Set PIN Lock", desc: "Lock addictive apps behind a PIN. Add friction to mindless scrolling." },
  { icon: Zap, title: "Smart Triggers", desc: "Choose what opens instead of Reels — a book, workout, or meditation app." },
  { icon: Bell, title: "Nudge Reminders", desc: "Gentle reminders when you've been scrolling too long. Awareness is the first step." },
  { icon: Target, title: "Daily Goals", desc: "Set daily screen-time goals and track your progress with beautiful insights." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-warm-gold text-sm font-medium tracking-widest uppercase">Features</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
          Everything you need to break free
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Powerful tools designed with psychology and gamification to help you reclaim your time.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 hover:border-warm-gold/30 transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-warm-gold/10 flex items-center justify-center mb-5 group-hover:bg-warm-gold/20 transition-colors">
              <f.icon className="w-6 h-6 text-warm-gold" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
