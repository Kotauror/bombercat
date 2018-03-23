describe("wolfsheet", function(){
  it("wolfsheet is a SpriteSheet instance", function(){
    expect(wolfSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("wolf is a BitmapAnimation instance", function(){
    expect(wolf).toEqual(jasmine.any(createjs.BitmapAnimation))
  })

  describe("addWolf", function(){

    var board
    var tileSheet

    beforeEach(function(){
      board = jasmine.createSpyObj(board, ['addChild'])
      tileSheet = jasmine.createSpyObj('tileSheet', {
        '_frameWidth': 2,
        '_frameHeight': 2
      })
    })

    it('sets the wolf x attribute', function(){
      addWolf(board, wolf, 1, 1, 1)
      expect(wolf.x).toEqual(72)
    })

    it('adds the wolf to the board', function(){
      addWolf(board, wolf, 1, 1, 1)
      expect(board.addChild).toHaveBeenCalledWith(wolf)
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
      addWolf(board, wolf, 1, 1, 1)
    })

    it("whichColumn returns the column number of the dog", function(){
      expect(whichColumn(wolf)).toEqual(1)
    })

    it("WhichRow returns the row number of the dog", function(){
      expect(whichRow(wolf)).toEqual(1)
    })
  })
})
