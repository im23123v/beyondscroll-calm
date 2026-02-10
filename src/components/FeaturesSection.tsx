import { motion } from "framer-motion";
import { Flame, Trophy, Lock, Zap, Bell, Target } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Daily Streaks",
    desc: "Build momentum with streak tracking. Stay consistent and watch your screen-free days grow.",
    accent: "from-orange-500 to-amber-400",
    bg: "bg-gradient-to-br from-orange-500/15 to-amber-400/10",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20 hover:border-orange-400/40",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    desc: "Compete with friends and the community. See who can stay focused the longest.",
    accent: "from-yellow-400 to-amber-300",
    bg: "bg-gradient-to-br from-yellow-500/15 to-amber-300/10",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20 hover:border-yellow-400/40",
  },
  {
    icon: Lock,
    title: "Set PIN Lock",
    desc: "Lock addictive apps behind a PIN. Add friction to mindless scrolling.",
    accent: "from-rose-500 to-pink-400",
    bg: "bg-gradient-to-br from-rose-500/15 to-pink-400/10",
    iconBg: "bg-rose-500/20",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/20 hover:border-rose-400/40",
  },
  {
    icon: Zap,
    title: "Smart Triggers",
    desc: "Choose what opens instead of Reels — a book, workout, or meditation app.",
    accent: "from-violet-500 to-purple-400",
    bg: "bg-gradient-to-br from-violet-500/15 to-purple-400/10",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/20 hover:border-violet-400/40",
  },
  {
    icon: Bell,
    title: "Nudge Reminders",
    desc: "Gentle reminders when you've been scrolling too long. Awareness is the first step.",
    accent: "from-sky-500 to-cyan-400",
    bg: "bg-gradient-to-br from-sky-500/15 to-cyan-400/10",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/20 hover:border-sky-400/40",
  },
  {
    icon: Target,
    title: "Daily Goals",
    desc: "Set daily screen-time goals and track your progress with beautiful insights.",
    accent: "from-emerald-500 to-green-400",
    bg: "bg-gradient-to-br from-emerald-500/15 to-green-400/10",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20 hover:border-emerald-400/40",
  },
];

const cardShapes = [
  "rounded-[2rem] rounded-tr-[4rem]",
  "rounded-[2rem] rounded-bl-[4rem]",
  "rounded-[2rem] rounded-tl-[4rem]",
  "rounded-[2rem] rounded-br-[4rem]",
  "rounded-[2rem] rounded-tr-[4rem] rounded-bl-[4rem]",
  "rounded-[2rem] rounded-tl-[4rem] rounded-br-[4rem]",
];

const FeaturesSection = () => (
  <section id="features" className="section-padding relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="inline-block text-warm-gold text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full border border-warm-gold/20 bg-warm-gold/5 mb-6">
          Features
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
          Everything you need to{" "}
          <span className="text-gradient">break free</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          Powerful tools designed with psychology and gamification to help you
          reclaim your time.
        </p>
      </motion.div>

      {/* Bento-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group relative p-8 md:p-10 border backdrop-blur-sm ${f.bg} ${f.borderColor} ${cardShapes[i]} transition-all duration-500 cursor-default overflow-hidden`}
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}
            />

            {/* Decorative corner accent */}
            <div
              className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${f.accent} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`}
              style={{
                borderRadius: "0 2rem 0 100%",
              }}
            />

            <div
              className={`w-14 h-14 ${cardShapes[i]} ${f.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <f.icon className={`w-7 h-7 ${f.iconColor}`} />
            </div>

            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
              {f.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.desc}
            </p>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r ${f.accent} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
