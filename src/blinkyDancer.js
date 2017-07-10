class BlinkyDancer extends Dancer {
  /*constructor() {
    super();
  }*/

  step () {
    super.step();
    this.$node.toggle();
  }
};

var _BlinkyDancer = BlinkyDancer;
