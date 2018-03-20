/*jslint nomen: true, browser: true, devel: true, plusplus: true */
/*global Image, Audio, createjs */
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
    }
    init();
}());
