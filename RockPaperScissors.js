// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  switch (true) {
    case (p1 === p2):
      return "Draw!";
    case (p1 === "rock" && p2 === "scissors"):
      return "Player 1 won!";
    case (p1 === "scissors" && p2 === "rock"):
      return "Player 2 won!";
    case (p1 === "scissors" && p2 === "paper"):
      return "Player 1 won!";
    case (p1 === "paper" && p2 === "scissors"):
      return "Player 2 won!";
    case (p1 === "paper" && p2 === "rock"):
      return "Player 1 won!";
    case (p1 === "rock" && p2 === "paper"):
      return "Player 2 won!";
  }
};

//BECOMES
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  };
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}

//OR
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};