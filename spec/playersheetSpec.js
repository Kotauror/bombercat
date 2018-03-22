describe("Playersheet", function(){

  it("playerSheet is a SpriteSheet instance", function(){
    expect(playerSheet).toEqual(jasmine.any(createjs.SpriteSheet))
  })

  it("player is a BitmapAnimation instance", function(){
    expect(player).toEqual(jasmine.any(createjs.BitmapAnimation))
  })

  describe("addPlayer", function(){
    beforeEach(function(){
      var board = jasmine.createSpyObj('board', ['addChild'])
      spyOn(tileSheet, '_frameWidth').and.returnValue(2)
      spyOn(tileSheet, '_frameHeight').and.returnValue(2)
      addPlayer(board, player, 1, 1, 1)
    })

    xit('sets the player x attribute', function(){

    })

    it('adds the player to the board', function(){
      expect(board.addChild).toHaveBeenCalledWith(player)
    })
  })

  // xit("whichColumn returns the player's location", function(){
  //   // spyOn(player, 'x').and.returnValue(48)
  //   // spyOn(player, 'width').and.returnValue(34)
  //   // spyOn(tileSheet, '_frameWidth').and.returnValue(48)
  //   spyOnProperty(player, 'width', 'set').and.returnValue(34)
  //   expect(player.width).toBe(34)
  // })

})
