//Terrain Rotation
AFRAME.registerComponent("drive-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 1) {
          this.data.speedOfRotation += 0.15;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -1) {
          this.data.speedOfRotation -= 0.15;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});