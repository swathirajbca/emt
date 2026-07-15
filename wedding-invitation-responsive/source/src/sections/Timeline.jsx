import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { weddingConfig as C } from "../config/weddingConfig";
import { Reveal } from "../components/Reveal";
import { DiyaFlame } from "../components/decor/Ornaments";

const TimelineItem = ({ item, index }) => {
  const left = index % 2 === 0;
  const reduceMotion = useReducedMotion();

  return (
    <div className={`timeline-item ${left ? "timeline-item--left" : "timeline-item--right"}`} data-testid={`timeline-item-${index}`}>
      <div className="timeline-card-wrap">
        <Reveal y={45} x={left ? 24 : -24}>
          <article className="timeline-card">
            <p className="eyebrow text-maroon-soft">{item.time}</p>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="mt-1 font-deco text-sm italic text-gold-gradient">{item.subtitle}</p>
            <p className="mt-3 font-body text-sm leading-relaxed text-inkSoft">{item.description}</p>
          </article>
        </Reveal>
      </div>

      <div className="timeline-node" aria-hidden="true">
        <motion.div
          initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
          whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "backOut" }}
          className="relative"
        >
          <span className="absolute inset-0 -m-3 rounded-full bg-gold/30 blur-md animate-glow-pulse" />
          <DiyaFlame className="relative h-9 w-7" />
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = () => (
  <section data-testid="timeline-section" className="section-block relative bg-cream-deep/60" aria-labelledby="timeline-heading">
    <div className="section-shell max-w-5xl">
      <div className="text-center">
        <Reveal><span className="eyebrow text-maroon-soft">The Celebrations</span></Reveal>
        <Reveal delay={0.1}><h2 id="timeline-heading" className="section-title mt-6 text-ink">Order of Ceremonies</h2></Reveal>
      </div>

      <div className="timeline-list">
        <div className="timeline-line" aria-hidden="true" />
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
          {C.timeline.map((item, index) => <TimelineItem key={`${item.time}-${item.title}`} item={item} index={index} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
