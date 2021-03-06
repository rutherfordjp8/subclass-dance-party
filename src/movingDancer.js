window.IMAGE_HEIGHT = 300;
window.IMAGE_WIDTH = 200;

class MovingDancer extends Dancer {

  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.xDirection = Math.random() > 0.5 ? 'left' : 'right';
    this.yDirection = Math.random() > 0.5 ? 'down' : 'up';
    this.downSpeed = 20 + Math.random() * 20;
    this.leftSpeed = 20 + Math.random() * 20;
  }

  step () {
    super.step();
    var animationLeftValue, animationTopValue;

    if (this.xDirection === 'right') {
      if (this.left + this.leftSpeed + IMAGE_WIDTH > window.WIDTH ) {
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

    if (this.yDirection === 'down') {
      if (this.top + this.downSpeed + IMAGE_HEIGHT > window.HEIGHT) {
        this.top -= this.downSpeed;
        this.yDirection = 'up';
        animationTopValue = '-=' + this.downSpeed;
      } else {
        this.top += this.downSpeed;
        animationTopValue = '+=' + this.downSpeed;
      }

    } else if (this.yDirection === 'up') {
      if (this.top - this.downSpeed < 0) {
        this.top += this.downSpeed;
        this.yDirection = 'down';
        animationTopValue = '+=' + this.downSpeed;
      } else {
        this.top -= this.downSpeed;
        animationTopValue = '-=' + this.downSpeed;
      }
    }

    this.$node.animate(
      {left: animationLeftValue, top: animationTopValue},
      this.timeBetweenSteps - 10,
      'linear'
    );
  }
}

window.MovingDancer = MovingDancer;
