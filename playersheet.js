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

  function whichColumn(player) {
    return Math.floor((player.x - player.width / 2) / tileSheet._frameWidth)
  }

  function whichRow(player) {
    return  Math.floor((player.y - player.height / 2) / tileSheet._frameHeight);
  }

  function movePlayer(player, dirx, diry, mapTiles) {
    var currentRow = whichRow(player);
    console.log(currentRow);
    var currentColumn = whichColumn(player);
    console.log(currentColumn);

    if (dirx === 0) { //moving up and down
      if (diry === -1) { //moving up
        player.topTile = mapTiles["t_" + (currentRow - 1) + "_" + currentColumn];
        player.rotation = 270;
        if (player.topTile.walkable) {
          player.y += diry * player.speed;
        }
      } else if (diry === 1) { //moving down
        player.downTile = mapTiles["t_" + (currentRow + 1) + "_" + currentColumn];
        player.rotation = 90;
        if (player.downTile.walkable) {
          player.y += diry * player.speed;
        }
      }
    }
    if (diry === 0) { //moving left and right
      if (dirx === -1) { // left
        player.leftTile = mapTiles["t_" + currentRow  + "_" + (currentColumn - 1)];
        player.rotation = 280;
        if (player.leftTile.walkable) {
          player.x += dirx * player.speed;
        }
      } else if (dirx === 1 ){ //right
        player.rightTile = mapTiles["t_" + currentRow  + "_" + (currentColumn + 1)];
        player.rotation = 0;
        if (player.rightTile.walkable) {
          player.x += dirx * player.speed;
        }
      }
    }
  }

  playerAtDoor = function(level){
    var playerRow = whichRow(player);
    var playerColumn = whichColumn(player);
    if (level[playerRow][playerColumn] === 5){
      location.reload();
    }
  };

  exports.player = player
  exports.playerSheet = playerSheet
  exports.addPlayer = addPlayer
  exports.whichColumn = whichColumn
  exports.whichRow = whichRow
  exports.movePlayer = movePlayer
  exports.playerAtDoor = playerAtDoor

}(this))
