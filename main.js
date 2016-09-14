$(function(){
  var turn = 0;
  function checkWinCondition(){
    var one = $('#1').text()
    var two = $('#2').text()
    var three = $('#3').text()
    var four = $('#4').text()
    var five = $('#5').text()
    var six = $('#6').text()
    var seven = $('#7').text()
    var eight = $('#8').text()
    var nine = $('#9').text()
    if ((one === 'X' && two === 'X' && three === 'X') || (one === 'O' && two === 'O' && three === 'O')){
      alert("You Win!");
    }
    else if ((four === 'X' && five === 'X' && six === 'X') || (four === 'O' && five === 'O' && six === 'O')){
      alert("You Win!");
    }

    else if ((seven === 'X' && eight === 'X' && nine === 'X') || (seven === 'O' && eight === 'O' && nine === 'O')){
      alert("You Win!");
    }
    else if ((one === 'X' && four === 'X' && seven === 'X') || (one === 'O' && four === 'O' && seven === 'O')){
      alert("You Win!");
    }
    else if ((two === 'X' && five === 'X' && eight === 'X') || (two === 'O' && five === 'O' && eight === 'O')){
      alert("You Win!");
    }
    else if ((three === 'X' && six === 'X' && nine === 'X') || (three === 'O' && six === 'O' && nine === 'O')){
      alert("You Win!");
    }
    else if ((one === 'X' && five === 'X' && nine === 'X') || (one === 'O' && five === 'O' && nine === 'O')){
      alert("You Win!");
    }
    else if ((seven === 'X' && five === 'X' && three === 'X') || (seven === 'O' && five === 'O' && three === 'O')){
      alert("You Win!");
    }

  };

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
    if (turn < 9){
      checkWinCondition();
    }
    else {
      alert("Draw");
    }
  });

})
