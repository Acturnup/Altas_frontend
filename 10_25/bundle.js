(() => {
  // js/Box.js
  var Box = class {
    constructor(color, width, height, x, y) {
      this.el = document.createElement("div");
      this.el.style.backgroundColor = color;
      this.el.style.width = `${width}px`;
      this.el.style.height = `${height}px`;
      this.el.style.position = "absoulte";
      this.el.style.left = `${x}px`;
      this.el.style.top = `${y}px`;
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    }
    onMouseEnter() {
      this.el.style.backgroundColor = "blue";
    }
    onMouseLeave = () => {
      this.el.style.backgroundColor = "green";
    };
    getElement() {
      return this.el;
    }
  };

  // js/RedBox.js
  var RedBox = class extends Box {
    constructor(width, height, x, y) {
      super("#A40E4C", width, height, x, y);
    }
    onMouseEnter() {
      this.el.style.backgroundColor = "#850A43";
    }
    onMouseLeave() {
      this.el.style.backgroundColor = "A40E4C";
    }
  };

  // js/main.js
  var redbox = new RedBox(200, 100, 100, 150);
  document.body.appendChild(redbox.getElement());
})();
//# sourceMappingURL=bundle.js.map
