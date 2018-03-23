describe("Playersheet", function(){

  it("playerSheet is a SpriteSheet instance", function(){
    expect(playerSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("player is a BitmapAnimation instance", function(){
    expect(player).toEqual(jasmine.any(createjs.BitmapAnimation))
  })

  describe("addPlayer", function(){

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
      addPlayer(board, player, 1, 1, 1)
      expect(player.x).toEqual(72)
    })

    it('adds the player to the board', function(){
      addPlayer(board, player, 1, 1, 1)
      expect(board.addChild).toHaveBeenCalledWith(player)
    })
  })

  // it("whichColumn returns the player's location", function(){
  //   expect(player.width).toBe(34)
  // })

})
