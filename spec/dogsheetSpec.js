describe("Dogsheet", function(){
  it("dogsheet is a SpriteSheet instance", function(){
    expect(dogSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("dog is a BitmapAnimation instance", function(){
    expect(dog).toEqual(jasmine.any(createjs.BitmapAnimation))
  })
})
