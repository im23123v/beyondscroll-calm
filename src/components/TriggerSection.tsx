import { motion } from "framer-motion";
import triggerImg from "@/assets/trigger-illustration.png";
import { ArrowRight } from "lucide-react";

const TriggerSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={triggerImg}
          alt="Smart trigger feature"
          className="w-full max-w-md mx-auto rounded-3xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-warm-gold text-sm font-medium tracking-widest uppercase">Smart Triggers</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
          Redirect your impulse
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Set a custom trigger — when you open Instagram Reels or YouTube Shorts,
          BeyondScroll intercepts and opens something meaningful instead. A meditation
          app, your e-book reader, a workout timer, or anything you choose.
        </p>

        <div className="space-y-4">
          {[
            "Open Instagram Reels → Launch Kindle app",
            "Open YouTube Shorts → Start 5-min meditation",
            "Open TikTok → Open your journal app",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-foreground">
              <ArrowRight className="w-5 h-5 text-warm-gold flex-shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TriggerSection;
