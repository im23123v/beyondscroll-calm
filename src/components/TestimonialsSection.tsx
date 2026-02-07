import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vishwa",
    text: "BeyondScroll completely changed my relationship with my phone. I went from 4 hours of Reels to under 30 minutes daily. The streaks keep me motivated!",
    role: "College Student",
  },
  {
    name: "Akshara",
    text: "The smart trigger feature is genius. Now when I instinctively open Instagram, my Kindle app opens instead. I've read 12 books this year thanks to BeyondScroll.",
    role: "Software Engineer",
  },
  {
    name: "Akshay",
    text: "The leaderboard with my friend group created healthy competition. We're all spending less time on our phones and more time actually living.",
    role: "Marketing Professional",
  },
  {
    name: "Shiva",
    text: "I was skeptical at first, but the science-backed approach convinced me. My anxiety has noticeably decreased since I stopped doomscrolling before bed.",
    role: "Medical Student",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-warm-gold text-sm font-medium tracking-widest uppercase">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
          Real people, real results
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
