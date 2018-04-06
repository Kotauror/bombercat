$( document ).ready(function() {

  $('#button').click(function(e) {
    $('#about_us').css("background-color", "#ffffff8a");
    $('#about_us').text("This game was created by Laura, Justyna, Ben, Steve and Noel at week 9 of Makers Academy. Check out our GitHb repo to learn more about the project and copyrighted graphics & music: https://github.com/lwkchan/bombercat.")
    $('#about_us').fadeOut(3000);
  });

});
