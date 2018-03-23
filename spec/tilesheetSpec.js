describe("Tilesheet", function(){
  it("tileSheet is a SpriteSheet instance", function(){
    expect(tileSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("player is a BitmapAnimation instance", function(){
    expect(tiles).toEqual(jasmine.any(createjs.BitmapAnimation))
  })
})
