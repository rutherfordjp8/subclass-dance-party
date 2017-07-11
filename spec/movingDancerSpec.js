describe('MovingDancer', function() {

  var movingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new MovingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it move', function() {
    var startingLeft = movingDancer.left;
    var startingTop = movingDancer.top;
    movingDancer.step();
    expect(movingDancer.left !== startingLeft).to.be.true;
    expect(movingDancer.top !== startingTop).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(movingDancer, 'step');
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });

    it('should turn around when it reached left edge of screen', function() {
      movingDancer.xDirection = 'left';
      clock.tick(timeBetweenSteps);
      expect(movingDancer.xDirection).to.equal('right');
    });

    it('should turn around when it reached right edge of screen', function() {
      movingDancer.xDirection = 'right';
      movingDancer.left = window.WIDTH;
      clock.tick(timeBetweenSteps);
      expect(movingDancer.xDirection).to.equal('left');
    });

    it('should turn around when it reached top edge of screen', function() {
      movingDancer.yDirection = 'up';
      clock.tick(timeBetweenSteps);
      expect(movingDancer.yDirection).to.equal('down');
    });
    it('should turn around when it reached bottom edge of screen', function() {
      movingDancer.yDirection = 'down';
      movingDancer.top = window.HEIGHT;
      clock.tick(timeBetweenSteps);
      expect(movingDancer.xDirection = 'up');
    });
  });

});
