function makeBricks() {
  var bricks = [];

  for (var col = 0; col < 5; col++) {
    bricks[col] = []

    for (var row = 0; row < 5; row++) {
      bricks[col][row] = { x: 0, y: 0 };

    }
  }

  return bricks
} 


console.log(makeBricks()); 