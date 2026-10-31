const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

// the other clips play only while they're on screen
const watch = new IntersectionObserver(
  (seen) => seen.forEach((e) => (e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause())),
  { threshold: 0.4 }
);
document.querySelectorAll('video.auto').forEach((v) => {
  if (calm) v.controls = true;
  else watch.observe(v);
});
