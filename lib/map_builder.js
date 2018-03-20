var MapBuilder = function() {
}


MapBuilder.prototype.build = function(map) {

  var row, col, board, tileClone, tileIndex, defineTile;

  canvas = document.getElementById("canvas");
  stage = new createjs.Stage(canvas);

  if (!board) {
      board = new createjs.Container();
      board.x = 0;
      board.y = 0;
      stage.addChild(board);
  }

  mapWidth = map[0].length;
  mapHeight = map.length;

  defineTile = {
      walkable: function (row, col) {
          if (map[row][col] === 0) {
              return false;
          } else {
              return true;
          }
      }
  };

  tileIndex = 0;
  for (row = 0; row < mapHeight; row++) {
    for (col = 0; col < mapWidth; col++) {
      tileClone = tiles.clone();
      tileClone.name = "t_" + row + "_" + col;
      tileClone.gotoAndStop(map[row][col]);
      tileClone.x = col * tileSheet._frameWidth;
      tileClone.y = row * tileSheet._frameHeight;
      mapTiles["t_" + row + "_" + col] = {
          index: tileIndex,
          walkable: defineTile.walkable(row, col)
      };
      tileIndex++;
      board.addChild(tileClone);
    }
  }
}
