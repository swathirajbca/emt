import React from "react";
import Marquee from "react-fast-marquee";

const message = "Two hearts, one sacred promise, and a lifetime of love—blessed by our families and cherished by our friends";

const FriendsMarquee = () => (
  <section data-testid="friends-marquee" className="friends-marquee" aria-label={`With love from our friends. ${message}`}>
    <p className="eyebrow mb-4 text-center text-gold">With love from our friends</p>
    <span className="sr-only">{message}</span>
    <div aria-hidden="true">
      <Marquee speed={34} gradient={false} autoFill pauseOnHover pauseOnClick>
        <span className="friends-marquee-item">{message}</span>
        <span className="friends-marquee-star">✦</span>
      </Marquee>
    </div>
  </section>
);

export default FriendsMarquee;
