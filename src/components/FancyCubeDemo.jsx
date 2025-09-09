import React, { useEffect, useRef } from "react";

/**
 * FancyCubeDemo — Black Metal Rubik (transparent + proper shadow)
 * - Transparent container (no cards).
 * - Shadow directly under the cube; width/opacity depends on X tilt.
 * - No “gaps” on edges: solid face frame, proper border radii.
 * - Drag with mouse/touch to rotate: horizontal -> Y, vertical -> X.
 */
export default function FancyCubeDemo({
  className = "w-full max-w-[700px] h-[360px] md:h-[520px]",
}) {
  const cubeRef = useRef(null);
  const shadowRef = useRef(null);
  const rafRef = useRef(0);
  const sceneRef = useRef(null);

  // Cube geometry
  const SIDE = 200; // cube edge length
  const HALF = SIDE / 2;

  // Offsets added by user interaction (degrees)
  const rxOffsetRef = useRef(0);
  const ryOffsetRef = useRef(0);

  // Drag state (not in React state for perf)
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  // Sensitivity & limits
  const DRAG_SENS = 0.35; // deg per pixel
  const RX_CLAMP = 80;    // limit X tilt

  useEffect(() => {
    const cube = cubeRef.current;
    const shadow = shadowRef.current;
    const start = performance.now();

    const tick = (ts) => {
      const t = (ts - start) / 1000;

      // Original base rotation (unchanged)
      const baseRx = 18 + Math.sin(t * 0.6) * 2; // forward-back tilt
      const baseRy = t * 28;                     // vertical axis rotation
      const rz = Math.cos(t * 0.35) * 1.2;       // subtle drift

      // Apply interaction offsets
      let rx = baseRx + rxOffsetRef.current;
      let ry = baseRy + ryOffsetRef.current;

      // Clamp X tilt for stable shadow
      rx = Math.max(-RX_CLAMP, Math.min(RX_CLAMP, rx));

      cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

      // Shadow response to X tilt (unchanged)
      const rxRad = (rx * Math.PI) / 180;
      const spread = 1.1 + Math.cos(Math.abs(rxRad)) * 0.45;      // 1.1..1.55
      const thickness = 0.9 - Math.cos(Math.abs(rxRad)) * 0.25;   // 0.65..0.9
      const opacity = 0.28 + Math.cos(Math.abs(rxRad)) * 0.32;    // 0.28..0.60

      shadow.style.transform = `scale(${spread}, ${thickness})`;
      shadow.style.opacity = opacity.toFixed(3);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Pointer drag (mouse + touch)
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const onPointerDown = (e) => {
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      lastYRef.current = e.clientY;
      el.setPointerCapture?.(e.pointerId);
      el.style.cursor = "grabbing";
      // prevent text selection / page scroll while starting drag
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      const dy = e.clientY - lastYRef.current;
      lastXRef.current = e.clientX;
      lastYRef.current = e.clientY;

      // Horizontal drag -> Y rotation; Vertical drag -> X tilt
      ryOffsetRef.current += dx * DRAG_SENS;
      rxOffsetRef.current += -dy * DRAG_SENS; // invert for natural feel
    };

    const endDrag = (e) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      el.releasePointerCapture?.(e.pointerId);
      el.style.cursor = "grab";
    };

    el.addEventListener("pointerdown", onPointerDown, { passive: false });
    el.addEventListener("pointermove", onPointerMove, { passive: true });
    el.addEventListener("pointerup", endDrag, { passive: true });
    el.addEventListener("pointercancel", endDrag, { passive: true });
    el.addEventListener("lostpointercapture", endDrag, { passive: true });

    // Better UX on touch devices
    el.style.cursor = "grab";
    el.style.touchAction = "none";

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("lostpointercapture", endDrag);
    };
  }, []);

  // One “tile” (rubik cell): black metallic with gray highlight
  const Cell = () => (
    <div
      className="rounded-[10px] border border-white/6 shadow-[0_8px_18px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
      style={{
        background:
          "linear-gradient(160deg,#161819 0%,#0f1011 55%,#131416 100%)",
        position: "relative",
      }}
    >
      {/* narrow specular highlight */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[10px]"
        style={{
          background:
            "linear-gradient(110deg,rgba(255,255,255,0.22) 0%,rgba(255,255,255,0.10) 8%,rgba(255,255,255,0.02) 25%,rgba(255,255,255,0) 45%)",
          mixBlendMode: "screen",
        }}
      />
      {/* satin polish layer */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[10px]"
        style={{
          background:
            "linear-gradient(0deg,rgba(255,255,255,0.08) 0%,rgba(255,255,255,0.03) 42%,rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );

  // Face frame: thin rim so the face doesn't look hollow
  const FaceFrame = () => (
    <div
      className="absolute inset-0 rounded-[18px]"
      style={{
        background: "linear-gradient(180deg,#0c0d0e 0%,#0a0b0c 100%)",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.35)",
      }}
    />
  );

  // One cube face: frame + 3×3 tile grid close to the edge (to avoid gaps)
  const Face = ({ style }) => (
    <div className="absolute inset-0 [transform-style:preserve-3d]" style={style}>
      {/* outer rim (covers gaps) */}
      <div
        className="absolute inset-[4px] rounded-[18px]"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.02) 100%)",
        }}
      />
      <FaceFrame />
      {/* 3×3 grid of tiles */}
      <div
        className="absolute inset-[8px] grid grid-cols-3 grid-rows-3 gap-[6px] rounded-[16px]"
        style={{ transform: "translateZ(2px)" }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={[
        "relative flex items-center justify-center",
        "bg-transparent",     // transparent container
        className,
      ].join(" ")}
    >
      {/* very subtle inner vignette (can be removed if not needed) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(85%_70%_at_65%_35%,rgba(0,0,0,0.02),transparent_55%)]" />

      {/* scene */}
      <div ref={sceneRef} className="relative w-[82%] h-[82%] [perspective:1200px] select-none">
        <div
          ref={cubeRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
          style={{ width: SIDE, height: SIDE }}
        >
          <Face style={{ transform: `rotateY(0deg) translateZ(${HALF}px)` }} />
          <Face style={{ transform: `rotateY(180deg) translateZ(${HALF}px)` }} />
          <Face style={{ transform: `rotateY(90deg) translateZ(${HALF}px)` }} />
          <Face style={{ transform: `rotateY(-90deg) translateZ(${HALF}px)` }} />
          <Face style={{ transform: `rotateX(90deg) translateZ(${HALF}px)` }} />
          <Face style={{ transform: `rotateX(-90deg) translateZ(${HALF}px)` }} />
        </div>

        {/* dynamic shadow — always centered below */}
        <div
          ref={shadowRef}
          className="pointer-events-none absolute left-1/2 bottom-[10%] h-8 w-[70%] -translate-x-1/2 rounded-[999px] blur-2xl transition-transform"
          style={{
            background:
              "radial-gradient(60% 100% at 50% 50%, rgba(0,0,0,0.45), rgba(0,0,0,0) 70%)",
            opacity: 0.48,
          }}
        />
      </div>
    </div>
  );
}
