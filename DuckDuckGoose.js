//The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each player's head until one is finally chosen.

//Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player.

function duckDuckGoose(players, goose) {
  return goose > players.length ? players[goose - players.length - 1] : players[goose - 1]
}

//duckDuckGoose(['a', 'b', 'c', 'd'], 1);
//duckDuckGoose(['a', 'b', 'c', 'd'], 5);
duckDuckGoose(['a', 'b', 'c', 'd'], 4);
