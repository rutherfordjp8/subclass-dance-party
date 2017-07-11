// Creates and returns a new dancer object that can step
class Dancer {

  constructor(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
    this.$node = $('<div class="dancer"><img src="https://media.giphy.com/media/2d8X4EQIdsXQc/giphy.gif"></div>');
    
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);

    this.$node.find('img').click(()=>{
      this.fall();
    });
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  
  setPosition(top, left) {
    // Use css top and left propertises to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    this.top = top;
    this.left = left;

    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  }

  destroy() {
    this.$node.find('img').attr('src', 'https://media.giphy.com/media/11XU8sAwhvwjok/giphy.gif');
    this.step = function() {};
    setTimeout(()=>{
      this.$node.remove();
    }, 1000);    
  }

  fall() {
    if (window.DUCK_HUNT_MODE) {
      this.$node.find('img').attr('src', 'https://media.giphy.com/media/WMa8VdnqeLdL2/giphy.gif'); 
      this.step = function() {};
      DUCK_HUNT_DOG.css('left', this.left);
      this.$node.animate({top: '+=2000'}, 1000, 'linear');
      setTimeout(function() {
        DUCK_HUNT_DOG.animate({top: "-=150"}, 500, function(){
          setTimeout(function() {
            DUCK_HUNT_DOG.animate({top: "+=150"}, 500);
          }, 500);
        });
      }, 1000);
      duckHuntScore++;
      $('#score').html(duckHuntScore);
    }
  }
}
