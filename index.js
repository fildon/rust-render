import("./pkg").then(({ render }) => {
  const paintFrame = (timestamp) => {
    render(timestamp);

    requestAnimationFrame(paintFrame);
  };

  requestAnimationFrame(paintFrame);
});
