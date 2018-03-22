(function(exports) {

  var delayInMilliseconds = 1000; //1 second

  function explosionUp(bombRow, bombColumn, level, tileSheet) {
    setTimeout(function() {
      //your code to be executed after 1 second
      level[bombRow][bombColumn] = 4;
      if (level[bombRow + 1][bombColumn] === 1 || level[bombRow + 1][bombColumn] === 2) {
        level[bombRow + 1][bombColumn] = 4
      }
      if (level[bombRow - 1][bombColumn] === 1 || level[bombRow - 1][bombColumn] === 2) {
        level[bombRow - 1][bombColumn] = 4
      }
      if (level[bombRow][bombColumn + 1] === 1 || level[bombRow][bombColumn + 1] === 2) {
        level[bombRow][bombColumn + 1] = 4
      }
      if (level[bombRow][bombColumn - 1] === 1 || level[bombRow][bombColumn - 1] === 2) {
        level[bombRow][bombColumn - 1] = 4
      }


    }, delayInMilliseconds);
  }
  exports.explosionUp = explosionUp

})(this)
