class BlinkyDancer extends Dancer {
  /*constructor() {
    super();
  }*/

  step () {
    super.step();
    this.$node.toggle();
  }
}

window.BlinkyDancer = BlinkyDancer;
