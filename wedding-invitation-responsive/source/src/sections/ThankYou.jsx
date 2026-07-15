import React from "react";
import { weddingConfig as C } from "../config/weddingConfig";
import { Reveal, MaskLine } from "../components/Reveal";
import { KolamDivider } from "../components/decor/Ornaments";
import goldLotus from "../assets/gold-lotus.png";

const ThankYou = () => (
  <section data-testid="thankyou-section" className="section-block relative overflow-hidden bg-maroon-deep text-center text-cream" aria-labelledby="thankyou-heading">
    <div className="thankyou-glow" aria-hidden="true" />
    <div className="section-shell relative max-w-3xl">
      <Reveal><img src={goldLotus} alt="Golden lotus" className="section-lotus" loading="lazy" decoding="async" /></Reveal>
      <h2 id="thankyou-heading" className="thankyou-title">
        <MaskLine delay={0.05}>With love</MaskLine>
        <MaskLine delay={0.18} className="italic text-gold-gradient">and blessings</MaskLine>
        <MaskLine delay={0.3}>from both families</MaskLine>
      </h2>
      <Reveal delay={0.4}>
        <div className="mx-auto mt-9 w-[min(16rem,80vw)] text-gold/70" aria-hidden="true"><KolamDivider className="w-full" /></div>
      </Reveal>
      <Reveal delay={0.5}>
        <p className="mt-9 font-deco text-xl tracking-wide text-cream sm:text-2xl">{C.brideFirstName} &amp; {C.groomFirstName}</p>
        <p className="mt-3 font-body text-sm text-cream/70">{C.closingFamilies}</p>
      </Reveal>
      <Reveal delay={0.6}>
        <img src={goldLotus} alt="" aria-hidden="true" className="mx-auto mt-12 h-auto w-[clamp(3.5rem,13vw,5rem)] object-contain opacity-90 drop-shadow-sm" loading="lazy" decoding="async" />
        <p className="eyebrow mx-auto mt-4 max-w-2xl text-cream/50">{C.sanskritBlessing.trim()}</p>
      </Reveal>
    </div>
  </section>
);

export default ThankYou;
