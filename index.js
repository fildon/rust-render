import("./pkg").then(({ render_to_ctx }) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const paintFrame = (timestamp) => {
    render_to_ctx(ctx, timestamp);

    requestAnimationFrame(paintFrame);
  };

  requestAnimationFrame(paintFrame);
});
