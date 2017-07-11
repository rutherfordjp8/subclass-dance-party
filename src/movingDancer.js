class MovingDancer extends Dancer {

  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.xDirection = 'right';
    this.leftSpeed = 100;
  }

  step () {
    super.step();
    console.log(this.timeBetweenSteps);
    var animationLeftValue;
    if (this.xDirection === 'right') {
      if (this.left + this.leftSpeed > window.WIDTH) {
        this.left -= this.leftSpeed;
        this.xDirection = 'left';
        animationLeftValue = '-=' + this.leftSpeed;
      } else {
        this.left += this.leftSpeed;
        animationLeftValue = '+=' + this.leftSpeed;
      }

    } else if (this.xDirection === 'left') {
      if (this.left - this.leftSpeed < 0) {
        this.left += this.leftSpeed;
        this.xDirection = 'right';
        animationLeftValue = '+=' + this.leftSpeed;
      } else {
        this.left -= this.leftSpeed;
        animationLeftValue = '-=' + this.leftSpeed;
      }
    }

    this.$node.animate(
      {left: animationLeftValue},
      {easing: 'linear'},
      this.timeBetweenSteps
    );
  }
}

var _MovingDancer = MovingDancer;
