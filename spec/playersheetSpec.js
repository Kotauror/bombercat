describe("Playersheet", function(){

  it("playerSheet is a SpriteSheet instance", function(){
    expect(playerSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("player is a BitmapAnimation instance", function(){
    expect(player).toEqual(jasmine.any(createjs.BitmapAnimation))
  })

  describe("addPlayer", function(){

    it("sets the player's position on the map", function(){

    })
  })
})
