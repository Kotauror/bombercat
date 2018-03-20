## GLOBAL STUFF

1) On the top of file put a global variable with elements used across other elements

```js
var $container, canvas, stage, canvasW, canvasH,
    totalLoaded, queue,
    map1, mapTiles, game, mapWidth, mapHeight, tileSheet, tiles, board;
```
2) Also at the top of the file, we specify the containter in which there is our canvas (see in html)
```js
$container = document.getElementById("container");
```
3) Also at the top of the file, we create a map1 array, that we will use later in the buildMap(map) method.

```js
map1 = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
```

4) We create an empty object `mapTiles`. We later use it here:
```js
mapTiles["t_" + row + "_" + col + row] = {
    index: tileIndex,
    walkable: defineTile.walkable(row, col)
};
```
Our program works perfectly without this one, so I don't know whats it for.

## FUNCTIONS

### init()

- is called at the end - init() - called first, makes the whole program going.
- manifest - an array with one object, links to the tiles file and gived it an id - tiles.
- handleFileLoad(event) - a function to load a file.  
  - if we console.log the event we will see, that the event has item.type that tells if the event loaded an image or a sound. We are loading an image.
  - if the loaded item is an image, then:
    - create a new image
    - set the .src of this image to the src provided in the tileSheet - see below.

```js
function handleFileLoad(event) {
  console.log(event)
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
```
```js
tileSheet = new createjs.SpriteSheet({
    "images": ["images/tiles.png"],
    "frames": {
        "height": 48,
        "width": 48,
        "regX": 0,
        "regY": 0,
        "count": 2
    }
}); // discussed below
```

### other stuff outside of the functions
- LoadQueue - a class from a PreloadJS - PreloadJS is a part of the CreateJS suite we're using.
- LoadQueue is used to coordinate loading of the assets in a particular order.
- we create a new instance of LoadQueue class - a quere
- We set the EventListeners for two events:
  - fileload - when a single(!) file has completed loading;
  - complete - when all files are loaded, it will call handleComplete;
- loadManifest is a build in method for instances of LoadQueue. It loads the manifest - an array of objects. Without loading the manifest the tiles are not appearing.
- set html canvas division to a variable in js
```js
canvas = document.getElementById("canvas");
```
- create a stage on canvas - Stage is affected by a ticker, canvas is just a html div.
```js
stage = new createjs.Stage(canvas);
```
- stage.enableMouseOver(10) - The frequency parameter indicates how many times per second EaselJS should calculate what is currently under the pointer.
- createjs.Touch.enable(stage) - allows to use Touchscreen.
- Ticker -  listeners can subscribe to the tick event to be notified when a set time interval has elapsed.
- createjs.Ticker.setFPS(30) - interval in which the Ticker is working.
- createjs.Ticker.useRAF = true - tells if TIcker is using request animation frame.
- createjs.Ticker.addEventListener("tick", handleTick); - we've subscribed a listener to the tick event. - on each tick we will call the handleTick methods. The bigger the argument in createjs.Ticker.setFPS(30), the more ofter we call this method.
- the handleTick() method is simply refreshing the stage:
```js
function handleTick() {

    stage.update();

}
```
- SpriteSheet has two parts:
  - it takes an image from the file - in out case images/tiles.png - big image
  - you build the tiles map using the image and according to the frames specification.

```js
tileSheet = new createjs.SpriteSheet({
    "images": ["images/tiles.png"],
    "frames": {
        "height": 48,
        "width": 48,
        "regX": 0,
        "regY": 0,
        "count": 2 // we have two frames - black and white
    }
});

```
- BitmapAnimation - takes an instace of SpriteSheet as an argument and it displays frames or sequences of frames.

### handleComplete(event)
- it's called here: queue.addEventListener("complete", handleComplete);
- when called, it calles buildMap(map1)

### buildMap(map)
- it sets the
```js
var row, col, tileClone, tileIndex, defineTile;
```
so leter we can call them without `var`
```js
if (!board) {
    board = new createjs.Container();
    board.x = 0;
    board.y = 0;
    stage.addChild(board);
}
```
- the code above creates a board if there is no board already.
- the lines above tell that the board starts at the edge of the stage.
```js
board.x = 0;
board.y = 0;
```
- then we put the board to the stage.
- mapWidth = map[0].length - the width of the map is the width of the first row of map1 (8)
- mapHeight - it's set to be the length of the map1 array.
- defineTile is an object that has a function walkable.
- Walkable function tells if we can 'walk' on a particular tile.
- if the tile is 0 according to map1, then we cannot walk, if 1 we can.
```js
defineTile = {
    walkable: function (row, col) {
        if (map[row][col] === 0) {
            return false;
        } else {
            return true;
        }
    }
};
```
- `tileClone = tiles.clone();` - returns a clone of `tiles = new createjs.BitmapAnimation(tileSheet);
` - we basically copy the tile
-  `tileClone.name = "t_" + row + "_" + col;` - we give name to the title according to it's location
- `tileClone.gotoAndStop(map[row][col]);` - we check if the particular tile is 0 or 1 - this does the `map[row][col])`.
- if we take a look at the tiles image, it has three parts - black, white and grey. In the `tileSheet = new createjs.SpriteSheet({` we set the count to 2 meaning we're interested only in the two first - black and white.
- `tileClone.gotoAndStop(map[row][col]);`- it's going to a particular tile and if it's 0 - it stops there and picks the black color since the black color is the first on the image. If it's 1, then it goes on and stops on 1 and white color.
```js
tileClone.x = col * tileSheet._frameWidth;
tileClone.y = row * tileSheet._frameHeight;
```
- moves to the new cell - 0* 48, 1* 48 etc.
