describe("Dogsheet", function(){
  it("dogsheet is a SpriteSheet instance", function(){
    expect(dogSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("dog is a BitmapAnimation instance", function(){
    expect(dog).toEqual(jasmine.any(createjs.BitmapAnimation))
  })

  describe("addDog", function(){

    var board
    var tileSheet

    beforeEach(function(){
      board = jasmine.createSpyObj(board, ['addChild'])
      tileSheet = jasmine.createSpyObj('tileSheet', {
        '_frameWidth': 2,
        '_frameHeight': 2
      })
    })

    it('sets the player x attribute', function(){
      addDog(board, dog, 1, 1, 1)
      expect(player.x).toEqual(72)
    })

    it('adds the player to the board', function(){
      addDog(board, dog, 1, 1, 1)
      expect(board.addChild).toHaveBeenCalledWith(dog)
    })
  })

  describe("Location Methods", function(){

    var board
    var tileSheet

    beforeEach(function(){
      board = jasmine.createSpyObj(board, ['addChild'])
      tileSheet = jasmine.createSpyObj('tileSheet', {
        '_frameWidth': 2,
        '_frameHeight': 2
      })
      addPlayer(board, dog, 1, 1, 1)
    })

    it("whichColumn returns the column number of the dog", function(){
      expect(whichColumn(dog)).toEqual(1)
    })

    it("WhichRow returns the row number of the dog", function(){
      expect(whichRow(dog)).toEqual(1)
    })
  })

})
