document.querySelectorAll("[data-ksc-video]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    const screen = link.closest(".ksc-demo").querySelector("[data-ksc-screen]");
    const poster = screen.querySelector("img");
    const video = document.createElement("video");
    if (!video.canPlayType("video/mp4")) return;

    event.preventDefault();
    video.src = link.href;
    video.poster = poster.src;
    video.width = poster.width;
    video.height = poster.height;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", link.getAttribute("aria-label"));
    video.addEventListener("play", () => {
      document.querySelectorAll(".ksc-demo video").forEach((other) => {
        if (other !== video) other.pause();
      });
    });

    link.hidden = true;
    poster.replaceWith(video);
    video.focus();
    video.play().catch(() => {});
  });
});
