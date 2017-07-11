class GroovingDancer extends MovingDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  step () {
    super.step();
    
    this.stepCount = this.stepCount === undefined ? 0 : this.stepCount;
    this.stepCount++;

    if (this.stepCount % 5 === 4) {
      this.$node.removeClass('spin');
      this.$node.removeClass('wobble');
    }

    if (this.stepCount % 5 === 0) {
      var random = Math.floor(Math.random() * 2);
      this.steps[random][1].call(this);
    }
  }
}

GroovingDancer.prototype.steps = [
  ['spin', function() {
    this.$node.addClass('spin');
  }],

  ['wobble', function() {
    this.$node.addClass('wobble');
  }]
];

window.GroovingDancer = GroovingDancer;