(function(exports){

  function Player(){
    this.x = 96
    this.y = 96
    this.regX = 0; // how far from the edge
    this.regY = 0; // how far from the edge
    this.rotation = 0;
    this.speed = 48;
    this.height = 34;
    this.width = 34;
    this.delayMove = 600;
  }

  Player.prototype.stand = function(){
    console.log("stand")
    // this.gotoAndStop("stand");
  }

  exports.Player = Player;

}(this))
 
