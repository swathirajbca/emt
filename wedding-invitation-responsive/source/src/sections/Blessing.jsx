import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { weddingConfig as C } from "../config/weddingConfig";
import { Reveal } from "../components/Reveal";
import { FluteMotif, KolamDivider } from "../components/decor/Ornaments";
import templeBackdrop from "../assets/temple-backdrop.svg";


const Blessing = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <section ref={ref} data-testid="blessing-section" className="section-block relative overflow-hidden bg-maroon text-cream" aria-labelledby="blessing-title">
      <div className="section-glow" aria-hidden="true" />
      <div className="section-shell relative grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5" y={50}>
          <div className="blessing-image-wrap">
            <div className="blessing-halo" aria-hidden="true" />
            <div className="blessing-image-frame">
              <motion.img
                style={reduceMotion ? undefined : { y: imgY, scale: 1.12 }}
                src={templeBackdrop}
                alt="South Indian temple gopuram"
                className="blessing-image"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 36vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-gold/10" aria-hidden="true" />
            </div>
          </div>
        </Reveal>

        <div className="min-w-0 lg:col-span-7">
          <Reveal><span className="eyebrow text-gold-gradient">The Blessing</span></Reveal>
          <Reveal delay={0.1}><FluteMotif className="mt-7 w-[min(13rem,70vw)] text-gold" aria-hidden="true" /></Reveal>
          <Reveal delay={0.15}>
            <h2 id="blessing-title" className="section-title mt-7 text-cream">
              Under the divine grace of <span className="italic text-gold-gradient">Radha &amp; Krishna</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="section-copy mt-7 max-w-xl text-cream/80">{C.blessingVerse}</p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-9 w-[min(14rem,70vw)] text-gold/70" aria-hidden="true"><KolamDivider className="w-full" /></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Blessing;
