(function(exports){

  function Player(x,y,rot,tileSheet){
    this.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2); //initial position of the player on x - which tile
    this.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the player on y  -  which tile
    this.regX = 0; // how far from the edge
    this.regY = 0; // how far from the edge
    this.rotation = rot;
    this.speed = 48;
    this.height = 34;
    this.width = 34;
    this.delayMove = 600;
  }

  Player.prototype.stand = function(){
    this.gotoAndStop("stand");
  }

  exports.Player = Player;

}(this))

var tileSheet = new createjs.SpriteSheet({
    "images": ["images/tiles.png"],
    "frames": {
        "height": 48,
        "width": 48,
        "regX": 0,
        "regY": 0,
        "count": 3
    }
  });

var player = new Player(3,2,0, tileSheet)
console.log(player)
