(function(exports){

  bombSheet = new createjs.SpriteSheet({
    animations: {
      stand: [0]
    },
    images: ["images/bomb.png"],
    frames: {
      height: 48,
      width: 48,
      regX: 24,
      regY: 24,
      count: 1
    }
  });

  flameSheet = new createjs.SpriteSheet({
    animations: {
      stand: [0]
    },
    images: ["images/flame.png"],
    frames: {
      height: 48,
      width: 48,
      regX: 24,
      regY: 24,
      count: 1
    }
  });

  bomb = new createjs.BitmapAnimation(bombSheet);
  bomb2 = new createjs.BitmapAnimation(bombSheet);

  flame = new createjs.BitmapAnimation(flameSheet);
  flame2 = new createjs.BitmapAnimation(flameSheet);
  flame3 = new createjs.BitmapAnimation(flameSheet);
  flame4 = new createjs.BitmapAnimation(flameSheet);
  flame5 = new createjs.BitmapAnimation(flameSheet);

  function addBomb(level, board, bomb, x, y) {
    bomb.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2); //initial position of the player on x - which tile
    bomb.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the bomb on y  -  which tile
    bomb.regX = 0; // how far from the edge
    bomb.regY = 0; // how far from the edge
    bomb.height = 48;
    bomb.width = 48;
    bomb.gotoAndStop("stand");

    board.addChild(bomb); //adds the bomb to the board?
console.log(bomb);
    flame.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2); //initial position of the player on x - which tile
    flame.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the flame on y  -  which tile
    flame.regX = 0; // how far from the edge
    flame.regY = 0; // how far from the edge
    flame.height = 48;
    flame.width = 48;
    flame.gotoAndStop("stand");


    flame2.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2) - 48; //initial position of the player on x - which tile
    flame2.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the flame2 on y  -  which tile
    flame2.regX = 0; // how far from the edge
    flame2.regY = 0; // how far from the edge
    flame2.height = 48;
    flame2.width = 48;
    flame2.gotoAndStop("stand");
    console.log('xcoords: ' + x);
    var z = y + 1
    console.log('ycoords: ' + z);

    level[y] = 0;
    console.log(level[y]);

    flame3.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2) + 48; //initial position of the player on x - which tile
    flame3.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the flame3 on y  -  which tile
    flame3.regX = 0; // how far from the edge
    flame3.regY = 0; // how far from the edge
    flame3.height = 48;
    flame3.width = 48;
    flame3.gotoAndStop("stand");

    flame4.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2) ; //initial position of the player on x - which tile
    flame4.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2) - 48; //initial position of the flame4 on y  -  which tile
    flame4.regX = 0; // how far from the edge
    flame4.regY = 0; // how far from the edge
    flame4.height = 48;
    flame4.width = 48;
    flame4.gotoAndStop("stand");

    flame5.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2); //initial position of the player on x - which tile
    flame5.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2) + 48; //initial position of the flame5 on y  -  which tile
    flame5.regX = 0; // how far from the edge
    flame5.regY = 0; // how far from the edge
    flame5.height = 48;
    flame5.width = 48;
    flame5.gotoAndStop("stand");



    var delayInMilliseconds = 1000; //1 second
    setTimeout(function() {
      board.removeChild(bomb);

      board.addChild(flame); //adds the bomb to the board?
      board.addChild(flame2); //adds the bomb to the board?
      board.addChild(flame3); //adds the bomb to the board?
      board.addChild(flame4); //adds the bomb to the board?
      board.addChild(flame5); //adds the bomb to the board?

      //your code to be executed after 1 second
      // level[x][y] = 6;
      // if (level[x + 1][y] === 1 || level[x + 1][y] === 2) {
      //   level[x + 1][y] = 4
      //   console.log('mu');
      // }
      // if (level[x - 1][y] === 1 || level[x - 1][y] === 2) {
      //   level[x - 1][y] = 4
      // }
      // if (level[x][y + 1] === 1 || level[x][y + 1] === 2) {
      //   level[x][y + 1] = 4
      // }
      // if (level[x][y - 1] === 1 || level[x][y - 1] === 2) {
      //   level[x][y - 1] = 4
      // }
      // refreshLocation(event)
    }, delayInMilliseconds);

    var delayInMilliseconds2 = 2000; //1 second
    setTimeout(function() {
      board.removeChild(flame);
      board.removeChild(flame2);
      board.removeChild(flame3);
      board.removeChild(flame4);
      board.removeChild(flame5);
    //   level[x][y] = 1;
    //   if (level[x + 1][y] === 4) {
    //     level[x + 1][y] = 1
    //   }
    //   if (level[x - 1][y] === 4) {
    //     level[x - 1][y] = 1
    //   }
    //   if (level[x][y + 1] === 4) {
    //     level[x][y + 1] = 1
    //   }
    //   if (level[x][y - 1] === 4) {
    //     level[x][y - 1] = 1
    //   }
    //   // refreshLocation(event)
    }, delayInMilliseconds2);



  }
  exports.addBomb = addBomb
  exports.bombSheet = bombSheet
  exports.bomb = bomb


})(this)
