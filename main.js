$(function(){

  var turn = 0;

  $('.square').click(function(){

    var self = $(this)



    if (self.text() === ('')){
      if (turn % 2 === 0){
        self.text("X");
      }
      else {
        self.text('O');
      }

      turn++;

    }
    else {
      alert("Invalid Move!");
    };
  });

})
