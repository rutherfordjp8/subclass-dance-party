// Creates and returns a new dancer object that can step
class Dancer {

  constructor(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }
};
