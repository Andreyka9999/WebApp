import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";


const carouselStyles = {
  root: { overflow: "hidden", width: "100%", position: "relative" },
  viewport: { overflow: "hidden", width: "100%" },
  container: { display: "flex", userSelect: "none", WebkitTouchCallout: "none" },
  slide: { flex: "0 0 100%", padding: 8 },
  navBtn: {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    zIndex: 1, background: "#fff", border: "none", borderRadius: "50%",
    width: 40, height: 40, boxShadow: "0 2px 6px rgba(0,0,0,0.12)", cursor: "pointer"
  },
};

export function Carousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div style={carouselStyles.root}>
      <div style={carouselStyles.viewport} ref={emblaRef}>
        <div style={carouselStyles.container}>
          {images.map((img, idx) => (
            <div style={carouselStyles.slide} key={idx}>
              <img
                src={img.src}
                alt={img.alt || `Product ${idx + 1}`}
                className="rounded-xl object-cover w-full"
                style={{ width: "100%", maxHeight: 520, objectFit: "cover"}}
              />
            </div>
          ))}
        </div>
      </div>
      <button style={{ ...carouselStyles.navBtn, left: 8 }} onClick={scrollPrev}>&#8592;</button>
      <button style={{ ...carouselStyles.navBtn, right: 8 }} onClick={scrollNext}>&#8594;</button>
    </div>
  );
}
