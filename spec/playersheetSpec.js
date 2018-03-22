describe("Playersheet", function(){

  var tileSheet

  it("playerSheet is a SpriteSheet instance", function(){
    expect(playerSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("player is a BitmapAnimation instance", function(){
    expect(player).toEqual(jasmine.any(createjs.BitmapAnimation))
  })

  it("whichColumn returns the player's location", function(){
    spyOn(player, 'x').and.returnValue(48)
    spyOn(player, 'width').and.returnValue(34)
    spyOn(tileSheet, '_frameWidth').and.returnValue(48)
    expect(whichColumn(player)).toEqual(1)
  })




})
