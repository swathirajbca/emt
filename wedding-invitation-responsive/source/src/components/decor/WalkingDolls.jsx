import React from "react";
import brideDoll from "../../assets/doll-it.png";
import groomDoll from "../../assets/doll-lawyer.png";

const SRC = { female: brideDoll, male: groomDoll };

const WalkingDoll = ({ side = "left", variant = "female", className = "" }) => (
  <div
    className={className}
    style={{ transform: side === "left" ? "rotate(2deg)" : "rotate(-2deg)" }}
    data-testid={`doll-${variant}`}
    aria-hidden="true"
  >
    <img
      src={SRC[variant]}
      alt=""
      draggable="false"
      decoding="async"
      className="h-full w-full select-none object-contain object-bottom drop-shadow-[0_18px_18px_rgba(107,29,47,0.22)]"
    />
  </div>
);

export default WalkingDoll;
