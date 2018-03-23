describe("maps", function(){
  it("levels returns a random map, which is an array", function(){
    expect(levels).toEqual(jasmine.any(Array))
  })

  it("the levels array contains arrays", function(){
    expect(levels[0]).toEqual(jasmine.any(Array))
  })

  it("the arrays in the array contains numbers", function(){
    for (var i in levels[0]){
      expect(levels[0][i]).toEqual(jasmine.any(Number))
    }
  })
})
