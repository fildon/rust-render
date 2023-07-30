import("./pkg").then(({ render }) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const paintFrame = (timestamp) => {
    ctx.clearRect(0, 0, 150, 150);
    ctx.fillStyle = colors[render(timestamp)];
    ctx.fillRect(0, 0, 150 * Math.random(), 150 * Math.random());
    requestAnimationFrame(paintFrame);
  };

  requestAnimationFrame(paintFrame);
});

const colors = ["red", "green", "blue", "pink", "black", "grey"];
