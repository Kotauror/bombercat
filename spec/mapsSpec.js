describe("maps", function(){
  it("levels returns a random map, which is an array", function(){
    expect(levels).toEqual(jasmine.any(Array))
  })

  it("the levels array contains arrays", function(){
    expect(levels[0]).toEqual(jasmine.any(Array))
  })

})
