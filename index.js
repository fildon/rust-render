import("./pkg").then(({ render_to_ctx }) => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const paintFrame = (timestamp) => {
    render_to_ctx(ctx, timestamp);

    requestAnimationFrame(paintFrame);
  };

  requestAnimationFrame(paintFrame);
});

/**
 * Given `height` and `width`:
 * there are `height`*`width`px to write to.
 * Each px takes 4 values:
 * - R
 * - G
 * - B
 * - A
 * Each of those values is 0-255
 */
