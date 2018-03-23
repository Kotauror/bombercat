(function(exports){

  wolfSheet = new createjs.SpriteSheet({
           animations: {
               stand: [0],
               walk: [0]
           },
           images: ["images/wolf.png"],
           frames: {
               height: 48,
               width: 48,
               regX: 24,
               regY: 24,
               count: 1,
           }
       });

  wolf = new createjs.BitmapAnimation(wolfSheet);

  function addWolf(board, wolf, x, y, rot) {
       wolf.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2);
       wolf.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2);
       wolf.regX = 0;
       wolf.regY = 0;
       wolf.rotation = rot;
       wolf.speed = 48;
       wolf.height = 34;
       wolf.width = 34;
       wolf.delayMove = 10;
       wolf.gotoAndPlay("walk");
       board.addChild(wolf);
   }


   function whichColumn(wolf) {
     return Math.floor((wolf.x - wolf.width / 2) / tileSheet._frameWidth)
   }

   function whichRow(wolf) {
     return  Math.floor((wolf.y - wolf.height / 2) / tileSheet._frameHeight);
   }

  function pickDirection() {
    myArray = ["dirx", "diry"]
    var direction = myArray[Math.floor(Math.random() * myArray.length)];
    return direction
  }

  function pickValue() {
    myArray = [1, -1]
    var value = myArray[Math.floor(Math.random() * myArray.length)];
    return value
  }

  function moveWolf(wolf, mapTiles) {
    var currentColumn = whichColumn(wolf);
    var currentRow = whichRow(wolf);
    var direction = pickDirection()


    if (direction === "diry") { //moving up and down
      var diry = pickValue()
      if (diry === -1) { //moving up
        wolf.topTile = mapTiles["t_" + (currentRow - 1) + "_" + currentColumn];
        wolf.rotation = 270;
        if (wolf.topTile.walkable) {
          wolf.y += diry * wolf.speed;
        }
      } else if (diry === 1) { //moving down
        wolf.downTile = mapTiles["t_" + (currentRow + 1) + "_" + currentColumn];
        wolf.rotation = 90;
        if (wolf.downTile.walkable) {
          wolf.y += diry * wolf.speed;
        }
      }
    }
    if (direction === "dirx") { //moving left and right
      var dirx = pickValue()
      if (dirx === -1) { // left
        wolf.leftTile = mapTiles["t_" + currentRow  + "_" + (currentColumn - 1)];
        wolf.rotation = 280;
        if (wolf.leftTile.walkable) {
          wolf.x += dirx * wolf.speed;
        }
      } else if (dirx === 1 ){ //right
        wolf.rightTile = mapTiles["t_" + currentRow  + "_" + (currentColumn + 1)];
        wolf.rotation = 0;
        if (wolf.rightTile.walkable) {
          wolf.x += dirx * wolf.speed;
        }
      }
    }
  }

  exports.wolf = wolf
  exports.wolfSheet = wolfSheet
  exports.addWolf = addWolf
  exports.moveWolf= moveWolf

}(this))
