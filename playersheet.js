(function(exports){

  playerSheet = new createjs.SpriteSheet({
    animations: {
      stand: [0],
      walk: [1, 4] // is it fluent?
    },
    images: ["images/player.png"],
    frames: {
      height: 48,
      width: 48,
      regX: 24, //puts it in the middle of file
      regY: 24, //puts it in the middle of file
      count: 5
    }
  });

  player = new createjs.BitmapAnimation(playerSheet); //creates a new player from the image

  function addPlayer(board, player, x, y, rot) {
    player.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2); //initial position of the player on x - which tile
    player.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the player on y  -  which tile
    player.regX = 0; // how far from the edge
    player.regY = 0; // how far from the edge
    player.rotation = rot;
    player.speed = 48;
    player.height = 34;
    player.width = 34;
    player.delayMove = 600;
    player.gotoAndStop("stand");
    board.addChild(player); //adds the player to the board.
  }

  exports.player = player
  exports.playerSheet = playerSheet
  exports.addPlayer = addPlayer

}(this))
