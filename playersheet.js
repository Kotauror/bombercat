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

    exports.player = player
    exports.playerSheet = playerSheet
}(this))
