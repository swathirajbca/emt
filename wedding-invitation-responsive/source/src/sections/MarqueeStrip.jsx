import React from "react";
import Marquee from "react-fast-marquee";
import { weddingConfig as C } from "../config/weddingConfig";

const MarqueeStrip = () => {
  const accessibleText = `${C.sanskritBlessing} ${C.brideFirstName} and ${C.groomFirstName}`;

  return (
    <section data-testid="marquee-strip" className="marquee-strip" aria-label={accessibleText}>
      <span className="sr-only">{accessibleText}</span>
      <div aria-hidden="true">
        <Marquee speed={38} gradient={false} autoFill pauseOnHover pauseOnClick>
          <span className="marquee-item outline-text">{C.sanskritBlessing}</span>
          <span className="marquee-item text-maroon/80">{C.brideFirstName} &amp; {C.groomFirstName}</span>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeStrip;
