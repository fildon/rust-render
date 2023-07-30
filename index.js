import("./pkg").then(({ render }) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const paintFrame = (timestamp) => {
    ctx.clearRect(0, 0, 150, 150);

    const x = render(timestamp);

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 150 * x, 150 * x);
    requestAnimationFrame(paintFrame);
  };

  requestAnimationFrame(paintFrame);
});
