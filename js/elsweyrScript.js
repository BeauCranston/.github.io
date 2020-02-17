/**
 *Statement of Authorship: “I, Beau Cranston, 000397019, certify that this material is my original work.No other person's work has been used without due acknowledgement and I have not made my work available to anyone else.”
 **/
//sets the initial value for player1's health
var player1Health = 10;
//sets the initial value for player2's health
var player2Health = 10;
//sets the value of the result of player1's roll
var rollResult1;
//sets the value of the result of player2's roll
var rollResult2;
//determines if its player1's turn
var player1Turn = true;
//determines if its player2's turn
var player2Turn = false;
//the roll button for player 1
var roll = document.getElementById("rollBtn");
//the roll button for player 2
var roll2 = document.getElementById("roll2Btn");
//gets the element for the attack button so that functionality can be give to it
var attackButton = document.getElementById("attackButton");
//value of the attack
var attackResult;
//gets the element to give the helpContent Functionality
var helpContent = document.getElementById("helpContent");
//gets the element for the help button to give it functionality
var helpButton = document.getElementById("helpButton");
//gets the div to display game over screen
var gameover = document.getElementById("gameover");
//gets the play again button to give functionality to it
var playAgain = document.getElementById("playAgainBtn");

var p1HasGone = false;
var p2HasGone = false;
//when the window loads set the following values
window.addEventListener("load", function() {
  var fighter = {};
  var fighter2 = {};
  //player 1 is the first to go
  player1Turn = true;
  //gets the element of the game canvas
  var canvas = document.getElementById("gameCanvas");
  //makes the canvas functional
  var ctx = canvas.getContext("2d");
  //sets the background image
  var background = new Image();
  background.src = "images/canvasBackground.jpg";
  //draws the background image
  ctx.drawImage(background, 0, 0, 350, 400);
  //sets the images for the fighters
  var image1 = new Image();
  var image2 = new Image();
  //references the images directories so that they can be displayed in the canvas
  image1.src = "images/fighter.png";
  image2.src = "images/fighter2.png";
  /*
   * draws the first fighter with its position as parameters so that it can be placed in a
   * specific position
   *
   */
  fighter.draw = function(x, y) {
    console.log("function called: " + x + ", " + y);
    ctx.drawImage(image1, x, y);
  };
  /*
   * draws the second fighter with its position as parameters so that it can be placed in a
   * specific position
   *
   */
  fighter2.draw = function(x, y) {
    console.log("function called: " + x + ", " + y);
    ctx.drawImage(image2, x, y);
  };
  //calls the fighter.draw method with its position determined
  fighter.draw(210, 216);
  //calls the fighter2. draw method with its position determined
  fighter2.draw(50, 216);
});

/*
 * a function to determine whos turn it is. If player 1 rolls, then it is player 2's turn
 * and vice versa
 */
function changeTurn() {
  //if its player 2's turn then change turn
  if (player2Turn === true) {
    player2Turn = false;
    roll2.disabled = true;
    player1Turn = true;
    roll.disabled = false;
    document.getElementById("p1Text").innerHTML = "Player 1 (turn)";
    document.getElementById("p2Text").innerHTML = "Player 2";
  }
  //if its player 1's turn then change to player 2's turn
  else {
    player2Turn = true;
    roll2.disabled = false;
    player1Turn = false;
    roll.disabled = true;
    document.getElementById("p2Text").innerHTML = "Player 2 (turn)";
    document.getElementById("p1Text").innerHTML = "Player 1 ";
  }
}
/*
 * When the roll button is clicked, the following code will execute
 */
roll.onclick = function() {
  /*
   * a function that determines player 1's roll value by rolling a six sided die(math.random)
   * the function displays the roll value
   * disables the roll button so that it can only be pressed once
   * and changes the turn to player 2
   */
  player1Roll = function() {
    rollResult1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("player1Roll").innerHTML = rollResult1;
    console.log("player1 roll called: " + rollResult1);
  };
  player1Roll();
  changeTurn();
};
/*
 * When the roll2 button is clicked, the following code will execute
 */
roll2.onclick = function() {
  /*
   * a function that determines player 2's roll value by rolling a six sided die(math.random)
   * the function displays the roll value
   * disables the roll2 button and so that it can only be pressed once and enables the attack button so that
   * an attack can be executed (button is disabled by default)
   * and changes the turn to player 1
   */
  player2Roll = function() {
    rollResult2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("player2Roll").innerHTML = rollResult2;
    console.log("player2 roll called: " + rollResult2);
  };
  player2Roll();
  changeTurn();

  attackButton.disabled = false;
};

//when the attack button is clicked, it will execute the following code
attackButton.onclick = function() {
  /*
   * a function that takes the roll results of both players
   * finds the winning roll and subtracts the losing roll from it to create the attack result
   * displays attack result
   * subtracts losing players health by the attack result
   * re-enables both roll buttons so that the next round can start
   * disables the attack button (back to default)
   * refreshes the values of the rolls to 0 so that the user can see that the next round has started
   * @returns {undefined}
   */
  attack = function() {
    /*
     * if rollresult1 is greater than rollresult2 then player 1 has the winning roll
     * and attacks player 2's health with a value equal to rollresult1 - rollresult 2
     */
    if (rollResult1 > rollResult2) {
      attackResult = rollResult1 - rollResult2;
      player2Health = player2Health - attackResult;
      document.getElementById("player2Health").innerHTML = player2Health;
    } else if (rollResult1 < rollResult2) {
      /*
       * if rollresult2 is greater than rollresult1 then player 2 has the winning roll
       * and attacks player 1's health with a value equal to rollresult2 - rollresult1
       */
      attackResult = rollResult2 - rollResult1;
      player1Health = player1Health - attackResult;
      document.getElementById("player1Health").innerHTML = player1Health;
    }
    //else if nobody has a greater roll than the attack result is 0
    else {
      attackResult = 0;
    }
    //if player 1's health drops below 0 than end the game with a display saying that player 1 wins
    /**
     * ending the game simply makes it so that all of the elements are hidden and the end game screen
     * is shown. this is done by changeing the class name of the elements. (see CSS page)
     */
    if (player1Health <= 0) {
      gameover.className = "end";
      document.getElementById("winner").innerHTML = "Player 2 Wins";
      document.getElementById("gameCanvas").className = "end";
      document.getElementById("helpContent").className = "end";
      document.getElementById("scoreBoard").className = "end";
      document.getElementById("buttons").className = "end";
      document.getElementById("helpButton").className = "end";
    }
    //if player 2's health drops below 0 than end the game with a display saying that player 2 wins
    else if (player2Health <= 0) {
      gameover.className = "end";
      document.getElementById("winner").innerHTML = "Player 1 Wins";
      document.getElementById("gameCanvas").className = "end";
      document.getElementById("helpContent").className = "end";
      document.getElementById("scoreBoard").className = "end";
      document.getElementById("buttons").className = "end";
      document.getElementById("helpButton").className = "end";
    }
  };

  //call the attack function to execute the attack when the attack button is clicked
  attack();
  //display the attack result

  if (rollResult1 > rollResult2) {
    document.getElementById("attack").innerHTML = attackResult + " >";
  } else {
    document.getElementById("attack").innerHTML = "< " + attackResult;
  }

  //re-enable both roll buttons
  roll.disabled = false;
  roll2.disabled = false;
  player1Turn = true;
  //disable the attack button
  attackButton.disabled = true;
  //set values back to default besides player health
  refresh();
};
/*
 * a function that resets the values of each roll back to default and sets the attack result to 0 so
 * that a player cannot do more than one attack per round
 * @returns {undefined}
 */
refresh = function() {
  attackResult = 0;
  roll = 0;
  roll2 = 0;
  document.getElementById("player1Roll").innerHTML = 0;
  document.getElementById("player2Roll").innerHTML = 0;
};

/*
 * a help button that displays the content or hides the content of the instructions by changing the name of the class for the
 * help content element (see CSS page)
 * @returns {undefined}
 */
helpButton.onclick = function() {
  if (helpContent.classList.contains("open")) {
    helpContent.classList.remove("open");
  } else {
    helpContent.classList.add("open");
  }
};
/*
 * when the play again button is clicked it calls a function that does the following:
 * -hides the game over screen
 * -shows the default game screen
 * -resets all vaules back to default
 * -changes the class names for all elements from "end" to "" which takes away the css implimented by the "end" css class
 * @returns {undefined}
 */
playAgain.onclick = function() {
  gameover.className = "";
  player1Health = 10;
  player2Health = 10;
  roll = 0;
  roll2 = 0;
  attackResult = 0;
  rollResult1 = 0;
  rollResult2 = 0;
  player1Turn = true;
  document.getElementById("player1Health").innerHTML = player1Health;
  document.getElementById("player2Health").innerHTML = player2Health;
  document.getElementById("gameCanvas").className = "";
  document.getElementById("helpContent").className = "";
  document.getElementById("scoreBoard").className = "";
  document.getElementById("buttons").className = "";
  document.getElementById("helpButton").className = "";
  document.getElementById("attack").innerHTML = 0;
};

/**
 * code to move the fighters after an attack but could not get it to work, will definitly try to
 * resolve this at a later time
 */
//function shake(x, y, fighter){
//    fighter.style["top"];
//    fighter.style["left"];
//    for (var i = 0; i < 10; i++){
//        fighter.style["left"] = x - 10;
//        document.pause(100);
//    }
//
//    for (var i = 10; i > 0; i--){
//        fighter.style["left"] = x - i;
//        document.pause(100);
//    }
//}
