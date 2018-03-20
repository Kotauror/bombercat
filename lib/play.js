/*jslint nomen: true, browser: true, devel: true, plusplus: true */
/*global Image, Audio, createjs */
<<<<<<< HEAD
(function () {
    'use strict';
    var $container, canvas, stage, canvasW, canvasH,
        manifest, totalLoaded, queue,
        level, mapTiles, game, mapWidth, mapHeight, tileSheet, tiles, board;
    $container = document.getElementById("container");
    level = levels;
    canvasW = level[0].length * 48;
    canvasH = level.length * 48;
    mapTiles = {};
    function buildMap(map) {
        var row, col, tileClone, tileIndex, defineTile;
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
=======
var mapBuilder = new MapBuilder()
console.log(mapBuilder)

(function (mapBuilder) {
    'use strict';
    var $container, canvas, stage, canvasW, canvasH,
        manifest, totalLoaded, queue,
        level, mapTiles, game, mapWidth, mapHeight, tileSheet, tiles, board,
        player, playerSheet, firstKey,
        keysPressed = {
          38: 0,
          40: 0,
          37: 0,
          39: 0
        };

    $container = document.getElementById("container");

    level = levels;

    canvasW = level[0].length * 48;
    canvasH = level.length * 48;
    mapTiles = {};

    // function buildMap(map) {
    //     var row, col, tileClone, tileIndex, defineTile;
    //     if (!board) {
    //         board = new createjs.Container();
    //         board.x = 0;
    //         board.y = 0;
    //         stage.addChild(board);
    //     }
    //     mapWidth = map[0].length;
    //     mapHeight = map.length;
    //     defineTile = {
    //         walkable: function (row, col) {
    //             if (map[row][col] === 0) {
    //                 return false;
    //             } else {
    //                 return true;
    //             }
    //         }
    //     };
    //     tileIndex = 0;
    //     for (row = 0; row < mapHeight; row++) {
    //         for (col = 0; col < mapWidth; col++) {
    //             tileClone = tiles.clone();
    //             tileClone.name = "t_" + row + "_" + col;
    //             tileClone.gotoAndStop(map[row][col]);
    //             tileClone.x = col * tileSheet._frameWidth;
    //             tileClone.y = row * tileSheet._frameHeight;
    //             mapTiles["t_" + row + "_" + col] = {
    //                 index: tileIndex,
    //                 walkable: defineTile.walkable(row, col)
    //             };
    //             tileIndex++;
    //             board.addChild(tileClone);
    //         }
    //     }
    // }


        function addPlayer(x, y, rot) {
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


        function movePlayer(player, dirx, diry) {
          var currentRow = whichRow(player);
          var currentColumn = whichColumn(player);

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

        document.addEventListener("keydown", function (e) {
            keysPressed[e.keyCode] = 1;
            if (!firstKey) { firstKey = e.keyCode; }
        });
        document.addEventListener("keyup", function (e) {
            keysPressed[e.keyCode] = 0;
            if (firstKey === e.keyCode) { firstKey = null; }
            if (player) { player.gotoAndStop("stand"); }
        });

        function detectKeys() {
            if (keysPressed[38] === 1) { // up
                if (player.currentAnimation !== "walk") { player.gotoAndPlay("walk"); }
                movePlayer(player, 0, -1);
            }
            if (keysPressed[40] === 1) { // down
                if (player.currentAnimation !== "walk") { player.gotoAndPlay("walk"); }
                movePlayer(player, 0, 1);
            }
            if (keysPressed[37] === 1) { // left
                if (player.currentAnimation !== "walk") { player.gotoAndPlay("walk"); }
                movePlayer(player, -1, 0);
            }
            if (keysPressed[39] === 1) { // right
                if (player.currentAnimation !== "walk") { player.gotoAndPlay("walk"); }
                movePlayer(player, 1, 0);
            }
            if (firstKey) {
                switch (firstKey) {
                case 38:
                    player.rotation = 270;
                    break;
                case 40:
                    player.rotation = 90;
                    break;
                case 37:
                    player.rotation = 0;
                    break;
                case 39:
                    player.rotation = 0;
                    break;
                }
              }
        }


        function handleTick() {
          detectKeys();
          stage.update();
        }




>>>>>>> 5f88c62fa4db3cf71fa62d34efcaf225a62e19c2
    function init() {
        manifest = [
            {src: "images/tiles.png", id: "tiles"}
        ];
        // totalLoaded = 0;
        // function handleLoadComplete(event) {
        //     totalLoaded++;
        // }
        function handleFileLoad(event) {
            if (event.item.type === "image") {
                var img = new Image();
                img.src = event.item.src;
                // img.onload = handleLoadComplete;
            } else if (event.item.type === "sound") {
                var audio = new Audio();
                audio.src = event.item.src;
                // audio.onload = handleLoadComplete;
            }
        }
        function handleComplete(event) {
<<<<<<< HEAD
            buildMap(level);
        }
        queue = new createjs.LoadQueue(false);
        // queue.installPlugin(createjs.SoundJS);
        queue.addEventListener("fileload", handleFileLoad);
        queue.addEventListener("complete", handleComplete);
        queue.loadManifest(manifest);
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(10);
        // createjs.Touch.enable(stage);
        createjs.Ticker.addEventListener("tick", stage);
=======
          console.log("hehehehh")
          console.log(mapBuilder)
          mapBuilder.build(level);
            addPlayer(3, 2, 0);
        }
        // queue.installPlugin(createjs.SoundJS);
        queue = new createjs.LoadQueue(false);
        queue.addEventListener("fileload", handleFileLoad);
        queue.addEventListener("complete", handleComplete);
        queue.loadManifest(manifest);

        stage.enableMouseOver(30);
        createjs.Ticker.setFPS(20);
        createjs.Ticker.useRAF = true;
        createjs.Ticker.addEventListener("tick", handleTick);
>>>>>>> 5f88c62fa4db3cf71fa62d34efcaf225a62e19c2
        // animation frames are not required
        tileSheet = new createjs.SpriteSheet({
            "images": ["images/tiles.png"],
            "frames": {
                "height": 48,
                "width": 48,
                "regX": 0,
                "regY": 0,
                "count": 3
            }
        });
        tiles = new createjs.BitmapAnimation(tileSheet);
<<<<<<< HEAD
    }
    init();
}());
=======

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
    }
    init();
}(mapBuilder));
>>>>>>> 5f88c62fa4db3cf71fa62d34efcaf225a62e19c2
