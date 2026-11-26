const moreDemos = document.querySelector(".ksc-more");

function revealLinkedDemo() {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target && moreDemos && moreDemos.contains(target)) {
    moreDemos.open = true;
    requestAnimationFrame(() => target.scrollIntoView());
  }
}

revealLinkedDemo();
window.addEventListener("hashchange", revealLinkedDemo);

if ("IntersectionObserver" in window) {
  const videos = document.querySelectorAll("[data-ksc-video]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const firstViews = new Set(videos);
  const resume = new Set();
  const threshold = 0.55;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target: video, intersectionRatio }) => {
        if (intersectionRatio < threshold || video.closest("details:not([open])")) {
          if (!video.paused && !video.ended) {
            if (!reducedMotion.matches) resume.add(video);
            video.pause();
          }
          return;
        }

        if (reducedMotion.matches) return;
        const firstView = firstViews.delete(video) && video.currentTime === 0;
        const wasPlaying = resume.delete(video);
        if ((firstView || wasPlaying) && video.paused && !video.ended) {
          video.play().catch(() => {});
        }
      });
    },
    { threshold }
  );

  videos.forEach((video) => observer.observe(video));
}
