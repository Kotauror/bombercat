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
       dog.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2);
       dog.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2);
       dog.regX = 0;
       dog.regY = 0;
       dog.rotation = rot;
       dog.speed = 10;
       dog.height = 34;
       dog.width = 34;
       dog.gotoAndPlay("walk");
       board.addChild(dog);
   }


   function whichColumn(dog) {
     return Math.floor((dog.x - dog.width / 2) / tileSheet._frameWidth)
   }

   function whichRow(dog) {
     return  Math.floor((dog.y - dog.height / 2) / tileSheet._frameHeight);
   }

  function randomisex() {
    myArray = [0,1]
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand
  }

  function randomisey() {
    myArray = [0,1]
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand
  }

  function moveDog(dog, mapTiles) {
    var currentRow = whichColumn(dog);
    var currentColumn = whichRow(dog);
    var dirx = randomisex()
    var diry = randomisey()

    console.log(mapTiles)

    if (dirx === 0) { //moving up and down
      if (diry === -1) { //moving up
        dog.topTile = mapTiles["t_" + (currentRow - 1) + "_" + currentColumn];
        dog.rotation = 270;
        if (dog.topTile.walkable) {
          dog.y += diry * dog.speed;
        }
      } else if (diry === 1) { //moving down
        dog.downTile = mapTiles["t_" + (currentRow + 1) + "_" + currentColumn];
        dog.rotation = 90;
        if (dog.downTile.walkable) {
          dog.y += diry * dog.speed;
        }
      }
    }
    if (diry === 0) { //moving left and right
      if (dirx === -1) { // left
        dog.leftTile = mapTiles["t_" + currentRow  + "_" + (currentColumn - 1)];
        dog.rotation = 280;
        if (dog.leftTile.walkable) {
          dog.x += dirx * dog.speed;
        }
      } else if (dirx === 1 ){ //right
        dog.rightTile = mapTiles["t_" + currentRow  + "_" + (currentColumn + 1)];
        dog.rotation = 0;
        if (dog.rightTile.walkable) {
          dog.x += dirx * dog.speed;
        }
      }
    }
  }

  exports.dog = dog
  exports.dogSheet = dogSheet
  exports.addDog = addDog
  exports.moveDog = moveDog

}(this))
