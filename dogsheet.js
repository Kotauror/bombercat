(function(exports){

  dogSheet = new createjs.SpriteSheet({
           animations: {
               stand: [0],
               walk: [1, 4]
           },
           images: ["images/enemy.png"],
           frames: {
               height: 48,
               width: 48,
               regX: 24,
               regY: 24,
               count: 5
           }
       });

  dog = new createjs.BitmapAnimation(dogSheet);

  function addDog(board, dog, x, y, rot) {
       dog = dog.clone();
       dog.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2);
       dog.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2);
       dog.regX = 0;
       dog.regY = 0;
       dog.rotation = rot;
       dog.speed = 2;
       dog.height = 34;
       dog.width = 34;
       dog.gotoAndPlay("walk");
       board.addChild(dog);
   }


  // function whichColumn(player) {
  //   return Math.floor((player.x - player.width / 2) / tileSheet._frameWidth)
  // }
  //
  // function whichRow(player) {
  //   return  Math.floor((player.y - player.height / 2) / tileSheet._frameHeight);
  // }
  //
  // function movePlayer(player, dirx, diry, mapTiles) {
  //   var currentRow = whichRow(player);
  //   console.log(currentRow);
  //   var currentColumn = whichColumn(player);
  //   console.log(currentColumn);
  //
  //   if (dirx === 0) { //moving up and down
  //     if (diry === -1) { //moving up
  //       player.topTile = mapTiles["t_" + (currentRow - 1) + "_" + currentColumn];
  //       player.rotation = 270;
  //       if (player.topTile.walkable) {
  //         player.y += diry * player.speed;
  //       }
  //     } else if (diry === 1) { //moving down
  //       player.downTile = mapTiles["t_" + (currentRow + 1) + "_" + currentColumn];
  //       player.rotation = 90;
  //       if (player.downTile.walkable) {
  //         player.y += diry * player.speed;
  //       }
  //     }
  //   }
  //   if (diry === 0) { //moving left and right
  //     if (dirx === -1) { // left
  //       player.leftTile = mapTiles["t_" + currentRow  + "_" + (currentColumn - 1)];
  //       player.rotation = 280;
  //       if (player.leftTile.walkable) {
  //         player.x += dirx * player.speed;
  //       }
  //     } else if (dirx === 1 ){ //right
  //       player.rightTile = mapTiles["t_" + currentRow  + "_" + (currentColumn + 1)];
  //       player.rotation = 0;
  //       if (player.rightTile.walkable) {
  //         player.x += dirx * player.speed;
  //       }
  //     }
  //   }
  // }
  //
  // playerAtDoor = function(level){
  //   var playerRow = whichRow(player);
  //   var playerColumn = whichColumn(player);
  //   if (level[playerRow][playerColumn] === 5){
  //     location.reload();
  //   }
  // };
  //
  // playerDeath = function(level){
  //   var playerRow = whichRow(player);
  //   var playerColumn = whichColumn(player);
  //   if (level[playerRow][playerColumn] === 4){
  //     location.reload();
  //   }
  // }

  exports.dog = dog
  exports.dogSheet = dogSheet
  exports.addDog = addDog

}(this))
