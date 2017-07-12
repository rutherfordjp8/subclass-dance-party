
var areTouching = function(dancer1, dancer2) {
  if (dancer1 === dancer2) {
    return false;
  }
  var leftMost = Math.min(dancer1.left, dancer2.left);
  var rightMost = Math.max(dancer1.left, dancer2.left);
  var topMost = Math.min(dancer1.top, dancer2.top);
  var bottomMost = Math.max(dancer1.top, dancer2.top);
  return (
    (leftMost + 100 > rightMost) &&
    (topMost + 200 > bottomMost) 
  );
};

class PowerDancer extends MovingDancer {
  step() {
    super.step();
    this.$node.removeClass('spin');
    var doFlip = false;
    
    var toDestroy = [];

    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      if ( areTouching(dancer, this) ) {
        toDestroy.push(dancer);
        doFlip = true;
      }
    }

    toDestroy.forEach(function(dancer) {
      dancer.destroy();
    });

    if (doFlip) {
      this.$node.addClass('spin');
    }
  }
}

//PowerDancer.DESTROY_THRESHOLD = 60;
window.PowerDancer = PowerDancer;