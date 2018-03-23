describe("maps", function(){
  it("levels returns a random map, which is an array", function(){
    expect(levels).toEqual(jasmine.any(Array))
  })

  it("the levels array contains arrays", function(){
<<<<<<< HEAD
    for (var i in levels ){
      expect(levels[i]).toEqual(jasmine.any(Array))
    }
  })

  it("the arrays in the array contains numbers", function(){
    for (var i in levels[0]){
      expect(levels[0][i]).toEqual(jasmine.any(Number))
    }
=======
    expect(levels[0]).toEqual(jasmine.any(Array))
>>>>>>> more-testing
  })
})
