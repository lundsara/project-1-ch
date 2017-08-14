window.onload = function() {
  console.log('Brain is ready!');


  const questions = [
      {
        q : "Which female artist made this notable work?",
        answers: [
          {option: 'A: Agnes Martin'},
          {option: 'B: Georgia O\'Keeffe'},
          {option: 'C: Cindy Sherman'},
          {option: 'D: Yoko Ono'},
          ],
          correct: 'B: Georgia O\'Keeffe',
          questionImage: "photos/o'keeffe.jpg",
      },
      {
        q : "Name this Canadian born painter who widely considered an 'American Artist'",
        answers: [
          {option: 'A: Agnes Martin'},
          {option: 'B: Bruce Nauman'},
          {option: 'C: Sol Lewitt'},
          {option: 'D: Robert Smithson'},
          ],
          correct: 'A: Agnes Martin',
          questionImage: 'photos/martin.jpg',

        },
        {
        q : "This artist broke the records in 1971 when his work was sold at auction for over 13 million dollars",
        answers: [
          {option: 'A: Charles Demuth'},
          {option: 'B: Edward Hopper'},
          {option: 'C: Richard Diebenkorn'},
          {option: 'D: Marsden Hartley'},
          ],
          correct: 'C: Richard Diebenkorn',
          questionImage: "photos/diebenkorn.jpg",

        },
        {
        q : "This artist has produced over 250 portraits of his wife Ada",
        answers: [
          {option: 'A: Alex Katz'},
          {option: 'B: Stuart Davis'},
          {option: 'C: David Salle'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'A: Alex Katz',
          questionImage: "photos/Katz.jpg",

        },
        {
        q : "This artist found fame by emulating iconic film stills",
        answers: [
          {option: 'A: Alex Katz'},
          {option: 'B: Stuart Davis'},
          {option: 'C: David Salle'},
          {option: 'D: Cindy Sherman'},
          ],
          correct: 'D: Cindy Sherman',
          questionImage: "photos/sherman.jpg",

        },
        {
        q : "This artist was heavily influenced by Clement Greenberg and was an important part of 'Post-Painterly Abstractionism' ",
        answers: [
          {option: 'A: Helen Frankenthaler'},
          {option: 'B: Franz Kline'},
          {option: 'C: Cy Twombly'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'A: Helen Frankenthaler',
          questionImage: "photos/Frankenthaler 2.jpg",

        },
        {
        q : "The work of this conceptual artist engages with intertextuality",
        answers: [
          {option: 'A: Clyfford Still'},
          {option: 'B: Stuart Davis'},
          {option: 'C: Jackson Pollock'},
          {option: 'D: Glen Ligon'},
          ],
          correct: 'D: Glen Ligon',
          questionImage: "photos/ligon 2.jpg",

        },
        {
        q : "This watercolorist is known for his townscapes and landscapes",
        answers: [
          {option: 'A: Helen Frankenthaler'},
          {option: 'B: Charles Burchfield'},
          {option: 'C: David Salle'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'B: Charles Burchfield',
          questionImage: "photos/Burchfield.jpg",

        },
        {
        q : "This artist began his career as an advertisting photographer",
        answers: [
          {option: 'A: Alfred Stieglitz'},
          {option: 'B: Richard Avedon'},
          {option: 'C: David Salle'},
          {option: 'D: Richard Prince'},
          ],
          correct: 'B: Richard Avedon',
          questionImage: "photos/Avedon.jpg",

        },
         {
        q : "This artist was inspired to create by an anatomy book he was given as a child",
        answers: [
          {option: 'A: Donald Judd'},
          {option: 'B: Frank Stella'},
          {option: 'C: Jean Michele Basquiat'},
          {option: 'D: Robert Rauschenberg'},
          ],
          correct: 'C: Jean Michele Basquiat',
          questionImage: "photos/Basquiat.jpg",

        },
         {
        q : "This artist has produced over 250 portraits of his wife Ada",
        answers: [
          {option: 'A: Josef Albers'},
          {option: 'B: Mark Rothko'},
          {option: 'C: Jean Michele Basquiat'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'A: Josef Albers',
          questionImage: "photos/albers.jpg",

        },
         {
        q : "This artist made a notorious series of portraits from inside an sanatorium",
        answers: [
          {option: 'A: Martha Rosler'},
          {option: 'B: Willem de Kooning'},
          {option: 'C: Alice Neel'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'C: Alice Neel',
          questionImage: "photos/neel.jpg",

        },
         {
        q : "Name this Harlem born artist and renowned muralist",
        answers: [
          {option: 'A: Charles Henry Alston'},
          {option: 'B: Richard Avedon'},
          {option: 'C: Jean Michele Basquiat'},
          {option: 'D: Barnett Newman'},
          ],
          correct: 'A: Charles Henry Alston',
          questionImage: "photos/alston.jpg",

        },
         {
        q : "This artist produced an iconic American painting called 'Nighthawks'",
        answers: [
          {option: 'A: Ed Ruscha'},
          {option: 'B: Andy Warhol'},
          {option: 'C: Edward Hopper'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'C: Edward Hopper',
          questionImage: "photos/hopper2 2.jpg",

        },
         {
        q : "This artist is renowned for his mobile sculptures",
        answers: [
          {option: 'A: Alexander Calder'},
          {option: 'B: Carl Andre'},
          {option: 'C: Vito Acconci'},
          {option: 'D: Dan Flavin'},
          ],
          correct: 'A: Alexander Calder',
          questionImage: "photos/calder.jpg",

        }
     ];


  let input = '';

  let playerScore = 0;

  let currentIndex = 0;

  const $question = $('.question');
  const $answers = $('.answer');



  function renderQuestion() {

    $question.html = questions[currentIndex].q;
    $('#testImage').src = questions[currentIndex].questionImage;


    for (var n = 0; n < $answers.length; n++) {
      //iterating through all of the node modules with the class answer using n as a counter
      //and giving each node a value , the value of an option in the data in the questions array above
      $answers[n].hmtl = questions[currentIndex].$answers[n].option;
      $question.css('color', 'red');
    }
    currentIndex++;

  };
  renderQuestion();



function gameResults () {
  for(let i = 0; i <= $answers.length; i++) {
    $answers[i].on('click', function(event) {

       if (event.target.innerHTML === questions[currentIndex -1].correct) {

    event.target.css('color', 'green');


    playerScore ++;
        }

      else {

      event.target.css('color', 'firebrick');
         }
     });


   let $tally = $('#tally');
   $tally.html = (playerScore) + ' out of ' + questions.length;
  }
}


  var $startGame = $('#startPage');
  var $gamePage = $('#gamePage');
  var $resultsPage = $('#resultsPage');

  if (start){
  $('#submit').on('submit', startGame);

      function startGame (event){
        event.preventDefault();
        let $username = $('#username');
        let $result = $('#result');
        $result.textContent = $username.value + "'s results!";
        $gamePage.css('visibility', 'visible');
        $landingPage.css('visibility', 'hidden');
        $resultsPage.css('visibility', 'hidden');
        gameResults();
        currentIndex = 0;
        playerScore = 0;
      }
    }
    if (next){
      $('#next').on('click', nextQuestion);
      function nextQuestion (){
        for (var i = 0; i < $answers.length; i++) {
          $answers[i].css('color', 'white');
        }
        $resultsPage.css('visibility', 'hidden');
        $gamePage.css('visibility', 'visible');
        $landingPage.css('visibility', 'hidden');
        checkGameCompletion ();
        renderQuestion();

        }
      }

    if (playAgain){
  $('#playAgain').on('click', reloadGame);

      function reloadGame (){
        $resultsPage.css('visibility', 'hidden');
        $gamePage.css('visibility', 'hidden');
        $landingPage.css('visibility', 'visible');
        location.reload();
      }
    }
  //if player click exit, reset game
  if (exit){
    $('#exit').on('click', resetGame);

      function resetGame (){
        $resultsPage.css('visibility', 'hidden');
        $gamePage.css('visibility', 'hidden');
        $landingPage.css('visibility', 'visible');
        $currentIndex = 0;
        $playerScore = 0;
        }
      }

    function checkGameCompletion (){
      if (questions.length === currentIndex) {
        $resultsPage.css('visibility', 'visible');
        $gamePage.css('visibility', 'hidden');
        $landingPage.css('visibility', 'hidden');
        currentIndex = 0;
        gameResults();

          }
        }





}
