import { motion } from "framer-motion";
import { X, Check, ThumbsDown, ThumbsUp, BatteryLow, BatteryFull, Brain, Frown, Smile, Clock, BookOpen, Trophy } from "lucide-react";
import withoutVideo from "@/assets/without-app-video.mp4";
import withVideo from "@/assets/with-app-video.mp4";

const withoutPoints = [
  { icon: Frown, text: "Endless mindless scrolling" },
  { icon: BatteryLow, text: "Mental fatigue & anxiety" },
  { icon: Clock, text: "Hours wasted daily" },
  { icon: Brain, text: "Reduced attention span" },
  { icon: ThumbsDown, text: "Poor sleep quality" },
];

const withPoints = [
  { icon: Smile, text: "Intentional phone usage" },
  { icon: BatteryFull, text: "Better mental health" },
  { icon: BookOpen, text: "Time for real hobbies" },
  { icon: Brain, text: "Sharper focus & clarity" },
  { icon: Trophy, text: "Sense of achievement" },
];

const PhoneMockup = ({ video, label }: { video: string; label: string }) => (
  <div className="relative mx-auto w-[220px] md:w-[260px]">
    {/* Phone frame */}
    <div className="relative rounded-[2.5rem] border-[6px] border-foreground/20 bg-background overflow-hidden shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/20 rounded-b-2xl z-10" />
      {/* Screen */}
      <div className="aspect-[9/19.5] overflow-hidden rounded-[2rem]">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <p className="text-center mt-4 font-heading font-semibold text-sm text-muted-foreground">{label}</p>
  </div>
);

const UsagePage = () => (
  <main className="bg-background min-h-screen">
    {/* Header */}
    <div className="text-center pt-28 pb-8 px-6">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-warm-gold text-sm font-medium tracking-widest uppercase"
      >
        See the difference
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-heading font-bold mt-4"
      >
        Life without vs. with BeyondScroll
      </motion.h1>
    </div>

    {/* Split screen */}
    <div className="flex flex-col md:flex-row min-h-[80vh]">
      {/* WITHOUT side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20 border-b md:border-b-0 md:border-r border-destructive/20 bg-destructive/[0.03]"
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
            <X className="w-4 h-4 text-destructive" />
          </div>
          <h2 className="font-heading font-bold text-xl text-destructive">Without BeyondScroll</h2>
        </div>

        <PhoneMockup video={withoutVideo} label="Trapped in the scroll" />

        <div className="mt-10 space-y-4 max-w-xs w-full">
          {withoutPoints.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 glass-card px-4 py-3 border-destructive/10"
            >
              <p.icon className="w-5 h-5 text-destructive flex-shrink-0" />
              <span className="text-sm text-foreground">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* WITH side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20 bg-warm-gold/[0.03]"
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-warm-gold" />
          </div>
          <h2 className="font-heading font-bold text-xl text-warm-gold">With BeyondScroll</h2>
        </div>

        <PhoneMockup video={withVideo} label="Living with intention" />

        <div className="mt-10 space-y-4 max-w-xs w-full">
          {withPoints.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 glass-card px-4 py-3 border-warm-gold/10"
            >
              <p.icon className="w-5 h-5 text-warm-gold flex-shrink-0" />
              <span className="text-sm text-foreground">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center py-16 px-6"
    >
      <p className="text-muted-foreground text-lg mb-6">The choice is yours.</p>
      <a
        href="/"
        className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
      >
        Get BeyondScroll Now
      </a>
    </motion.div>
  </main>
);

export default UsagePage;
