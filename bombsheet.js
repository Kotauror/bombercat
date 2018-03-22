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

  bomb = new createjs.BitmapAnimation(bombSheet);

  function addBomb(level, board, bomb, x, y) {
    console.log('bomb');
    bomb.x = x * tileSheet._frameWidth + (tileSheet._frameWidth / 2); //initial position of the player on x - which tile
    bomb.y = y * tileSheet._frameHeight + (tileSheet._frameHeight / 2); //initial position of the bomb on y  -  which tile
    bomb.regX = 0; // how far from the edge
    bomb.regY = 0; // how far from the edge
    bomb.height = 48;
    bomb.width = 48;
    bomb.gotoAndStop("stand");

    board.addChild(bomb); //adds the bomb to the board?

    var delayInMilliseconds = 1000; //1 second

    setTimeout(function() {
      //your code to be executed after 1 second
      level[x][y] = 0;
      if (level[x + 1][y] === 1 || level[x + 1][y] === 2) {
        level[x + 1][y] = 4
      }
      if (level[x - 1][y] === 1 || level[x - 1][y] === 2) {
        level[x - 1][y] = 4
      }
      if (level[x][y + 1] === 1 || level[x][y + 1] === 2) {
        level[x][y + 1] = 4
      }
      if (level[x][y - 1] === 1 || level[x][y - 1] === 2) {
        level[x][y - 1] = 4
      }
      // refreshLocation(event)
    }, delayInMilliseconds);

    var delayInMilliseconds2 = 2000; //1 second
    setTimeout(function() {
      level[x][y] = 1;
      if (level[x + 1][y] === 4) {
        level[x + 1][y] = 1
      }
      if (level[x - 1][y] === 4) {
        level[x - 1][y] = 1
      }
      if (level[x][y + 1] === 4) {
        level[x][y + 1] = 1
      }
      if (level[x][y - 1] === 4) {
        level[x][y - 1] = 1
      }
      // refreshLocation(event)
    }, delayInMilliseconds2);



  }
  exports.addBomb = addBomb
  exports.bombSheet = bombSheet
  exports.bomb = bomb


})(this)
