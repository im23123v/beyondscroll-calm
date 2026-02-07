import { motion } from "framer-motion";

const stats = [
  { value: "2.5 hrs", label: "Average daily doomscrolling time", source: "DataReportal 2025" },
  { value: "50%", label: "Increase in anxiety from excessive social media use", source: "APA Research" },
  { value: "12 sec", label: "Average human attention span (was 15 sec in 2000)", source: "Microsoft Study" },
  { value: "88%", label: "Of users feel they waste time on short-form video", source: "Pew Research" },
];

const ScienceSection = () => (
  <section id="science" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-warm-gold text-sm font-medium tracking-widest uppercase">The Science</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
          The data doesn't lie
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Research-backed evidence showing why doomscrolling is one of the biggest threats to mental health today.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center"
          >
            <p className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-3">
              {s.value}
            </p>
            <p className="text-foreground font-medium text-sm mb-2">{s.label}</p>
            <p className="text-muted-foreground text-xs">{s.source}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScienceSection;
