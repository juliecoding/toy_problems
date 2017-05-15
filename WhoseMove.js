// Task
// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
// Input/Output
// [input] string lastPlayer
// "black" or "white" - whose move it was during the previous round.

// [input] boolean win
// true if the player who made a move during the previous round won, false otherwise.
// [output] a string

function whoseMove(lastPlayer, win) {
  if (win === true) {
    return lastPlayer;
  } else if (lastPlayer === "white") {
    return "black";
  } else {
    return "white";
  }
}

//BECOMES 
function whoseMove(lastPlayer, win) {
  if (win === true) {
    return lastPlayer;
  } else {
    return lastPlayer === 'black' ? 'white' : 'black';
  }
}