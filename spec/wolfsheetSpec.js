describe("wolfsheet", function(){
  it("wolfsheet is a SpriteSheet instance", function(){
    expect(wolfSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("wolf is a BitmapAnimation instance", function(){
    expect(wolf).toEqual(jasmine.any(createjs.BitmapAnimation))
  })
})
